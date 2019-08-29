import React, { useState, useCallback } from 'react'
import MessagesList from '../MessagesList';
import SendMessageToolbar from '../SendMessageToolbar';

const Chat = () => 
        {
          const [needRefresh, setNeedRefresh] = useState(false);
          const onMessageLoadedCallback = useCallback(() => {
            setNeedRefresh(false);
          }, [])
          return (
            <div>
              <MessagesList needRefresh={needRefresh} onMessagesLoaded={onMessageLoadedCallback} />
              <SendMessageToolbar onSendMessage={() => {
                setNeedRefresh(true);
              }} />
            </div>
          );
        }

export default Chat
