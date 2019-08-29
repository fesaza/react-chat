import React, { useState } from 'react'
import styled from 'styled-components';
import services from '../../services';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import UserContext from '../Context/UserContext';

const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    background-color: #1890ff;
    padding: 30px;
`;



const SendMessageToolbar = ({onSendMessage}) => {
    const [message, setMessage] = useState();
    return (
        <UserContext.Consumer>
            {({ user }) => (
                <Container>
                    <TextInput type="text" value={message} placeholder="type a message" onChange={(e) => {
                        setMessage(e.target.value);
                    }} />
                    <Button disabled={!message} onClick={async () => {
                        if(message){
                            await services.sendMessage(message, user);
                            setMessage("");
                            onSendMessage && onSendMessage();
                        }
                    }}>Send</Button>
                </Container>)
            }
        </UserContext.Consumer>
    )
}

export default SendMessageToolbar
