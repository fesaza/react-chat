import React, { useState } from 'react'
import services from '../../services';

const SendMessageToolbar = () => {
    const [message, setMessage] = useState();
    return (
        <div>
            <input type="text" placeholder="type a message" onChange={(e) => {
                setMessage(e.target.value);
            }} />
            <button onClick={() => {
                if(message){
                    services.sendMessage(message, "fesaza");
                }
            }}>Send</button>
        </div>
    )
}

export default SendMessageToolbar
