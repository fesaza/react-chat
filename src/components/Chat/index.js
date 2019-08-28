import React from 'react'
import MessagesList from '../MessagesList';
import SendMessageToolbar from '../SendMessageToolbar';

const Chat = () => 
        (
            <div>
              <MessagesList />
              <SendMessageToolbar />
            </div>
          );

export default Chat
