import React, { useEffect, useState, useRef } from 'react'
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
    const containerRef = useRef(null);

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

    useEffect(() => {
        containerRef.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <Container>
            {messages.map(message => (<CardMessage message={message} key={message._id} />))}
            <div ref={containerRef}/>
        </Container>
    )
}

export default MessagesList
