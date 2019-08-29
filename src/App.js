import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Chat from './components/Chat';
import Button from './components/common/Button';
import TextInput from './components/common/TextInput';
import UserContextProvider from './components/Context/UserContextProvider';
import UserContext from './components/Context/UserContext';

const LoginContainer = styled.div`
padding: 20%;
`;

const App = () => { 
    const [userName, setUserName] = useState();
    return(
        <>
            <UserContextProvider>
                <UserContext.Consumer>
                    {({ user, setUser }) => 
                        {
                            if(!user){
                                return (<LoginContainer>
                                    <h4>Write your username: </h4>
                                    <TextInput value={userName} onChange={e => setUserName(e.target.value)} />
                                    <Button onClick={() =>{
                                        setUser(userName);
                                    }}>Ok</Button>
                                </LoginContainer>)
                            }

                            return <Chat/>;
                        }
                    }
                </UserContext.Consumer>
            </UserContextProvider>
        </>);
}
  

export default App;
