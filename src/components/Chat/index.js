import React from 'react'
import MessagesList from '../MessagesList';
import SendMessageToolbar from '../SendMessageToolbar';

const Chat = () => 
        {
          
          return (
            <div>
              <MessagesList />
              <SendMessageToolbar />
            </div>
          );
        }

export default Chat
