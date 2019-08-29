import styled from 'styled-components';

const TextInput = styled.input`
box-sizing: border-box;
padding: 0;
font-variant: tabular-nums;
line-height: 1.5;
list-style: none;
font-feature-settings: 'tnum';
position: relative;
display: inline-block;
width: 100%;
height: 32px;
padding: 4px 11px;
color: rgba(0,0,0,0.65);
font-size: 14px;
line-height: 32px;
line-height: 1.5 \9;
background-color: #fff;
background-image: none;
border: 1px solid #d9d9d9;
border-radius: 4px;
transition: all .3s;
flex-basis: auto;
@media(max-width: 700px) {
    margin: 0;
}
&:hover {
    border-color: #fd8509;
    border-right-width: 1px !important;
}
`;

export default TextInput;