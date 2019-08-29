import React, { useState } from 'react'
import styled from 'styled-components';
import services from '../../services';

const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    background-color: #1890ff;
    padding: 30px;
`;

const MessageInput = styled.input`
box-sizing: border-box;
margin: 0 0 0 30px;
padding: 0;
font-variant: tabular-nums;
line-height: 1.5;
list-style: none;
font-feature-settings: 'tnum';
position: relative;
display: inline-block;
width: 100%;
height: 32px;
padding: 4px 11px;
color: rgba(0,0,0,0.65);
font-size: 14px;
line-height: 32px;
line-height: 1.5 \9;
background-color: #fff;
background-image: none;
border: 1px solid #d9d9d9;
border-radius: 4px;
transition: all .3s;
flex-basis: auto;
@media(max-width: 700px) {
    margin: 0;
}
&:hover {
    border-color: #fd8509;
    border-right-width: 1px !important;
}
`;

const SendButton = styled.button`
    margin: 0px 95px 0 30px;
    color: #fff;
    background-color: #fd8509;
    border-color: #fd8509;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 0 rgba(0,0,0,0.045);
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    @media(max-width: 700px) {
        margin: 0px 50px 0 10px;
    }
`;

const SendMessageToolbar = ({onSendMessage}) => {
    const [message, setMessage] = useState();
    return (
        <Container>
            <MessageInput type="text" value={message} placeholder="type a message" onChange={(e) => {
                setMessage(e.target.value);
            }} />
            <SendButton disabled={!message} onClick={async () => {
                if(message){
                    await services.sendMessage(message, "fesaza");
                    setMessage("");
                    onSendMessage && onSendMessage();
                }
            }}>Send</SendButton>
        </Container>
    )
}

export default SendMessageToolbar
