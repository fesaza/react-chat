import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import CardMessage from '../CardMessage';
import services from '../../services';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const MessagesList = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await services.getMessages();
            setMessages(data);
        };

        fetchData();
    }, []);
    return (
        <Container>
            {messages.map(message => (<CardMessage message={message} />))}
        </Container>
    )
}

export default MessagesList
