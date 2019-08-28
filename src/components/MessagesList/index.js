import React, { useEffect, useState } from 'react'
import CardMessage from '../CardMessage';
import services from '../../services';

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
        <div>
            {messages.map(message => (<CardMessage message={message} />))}
        </div>
    )
}

export default MessagesList
