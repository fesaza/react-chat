import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
    background: #fff;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    margin: 20px;
    padding: 10px 20px;
    display: inline-flex;
    flex-direction: column;
`;

const SubTitle = styled.div`
    color: gray;
    display: initial;
`;

const Message = styled.h4`
    margin: 8px 0;
    display: initial;
`;

const CardMessage = ({message}) => {
    return (
        <Card>
            <SubTitle>
                {message.author}
            </SubTitle>
            <Message>
                {message.message}
            </Message>
            <SubTitle>{new Date(message.timestamp).toLocaleString()}</SubTitle>
        </Card>
    )
}

export default CardMessage
