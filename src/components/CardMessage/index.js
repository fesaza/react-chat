import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
    background: #fff;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    margin: 12px 20px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    width: max-content;
    max-width: 70%;
`;

const SubTitle = styled.div`
    color: gray;
`;

const SubTitleTime = styled(SubTitle)`
    font-size: 12px;
`;

const Message = styled.h4`
    margin: 8px 0 6px;
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
            <SubTitleTime>{new Date(message.timestamp).toLocaleString()}</SubTitleTime>
        </Card>
    )
}

export default CardMessage
