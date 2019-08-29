import styled from 'styled-components';

const Button = styled.button`
    margin: 0px 95px 0 30px;
    color: #fff;
    background-color: #fd8509;
    border-color: #fd8509;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 0 rgba(0,0,0,0.045);
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    @media(max-width: 700px) {
        margin: 0px 50px 0 10px;
    }
`;

export default Button;
