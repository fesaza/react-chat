import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import CardMessage from '../CardMessage';
import services from '../../services';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height:calc(100% - 92px);
    overflow-y:auto;
    position: fixed;
    max-width: 100%;
`;

const MessagesList = ({ needRefresh, onMessagesLoaded }) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            onMessagesLoaded && onMessagesLoaded();
            const data = await services.getMessages();
            setMessages(data);
        };

        if(needRefresh || messages.length === 0){
            fetchData();
        }
    }, [messages.length, needRefresh, onMessagesLoaded]);
    return (
        <Container>
            {messages.map(message => (<CardMessage message={message} key={message._id} />))}
        </Container>
    )
}

export default MessagesList
