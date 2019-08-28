import React, { useEffect, useState } from 'react'
import CardMessage from '../CardMessage';
import services from '../../services';

const MessagesList = () => {
    const [messages, setMessages] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const data = await services.getMessages();
        setMessages(data);
    }, []);
    return (
        <div>
            {messages.map(message => (<CardMessage message={message} />))}
        </div>
    )
}

export default MessagesList
