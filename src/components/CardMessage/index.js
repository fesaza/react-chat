import React from 'react'
import styled from 'styled-components';
import UserContext from '../Context/UserContext';

const Card = styled.div`
    background: ${(props) => props.isOwn ? '#ffec8f' : '#fff'};
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    margin: 12px 20px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    width: max-content;
    max-width: 70%;
    align-self: ${(props) => props.isOwn ? 'flex-end' : 'flex-start'}
`;

const SubTitle = styled.div`
    color: gray;
    @media(max-width: 700px) {
        font-size: 12px;
    }
`;

const SubTitleTime = styled(SubTitle)`
    font-size: 12px;
`;

const Message = styled.h4`
    margin: 8px 0 6px;
    @media(max-width: 700px) {
        font-size: 14px;
    }
`;

const CardMessage = ({message}) => {
    return (
        <UserContext.Consumer>
            {({ user }) => (
                <Card isOwn={message.author === user}>
                    <SubTitle>
                        {message.author}
                    </SubTitle>
                    <Message>
                        {message.message}
                    </Message>
                    <SubTitleTime>{new Date(message.timestamp).toLocaleString()}</SubTitleTime>
                </Card>
            )}
        </UserContext.Consumer>
    )
}

export default CardMessage
