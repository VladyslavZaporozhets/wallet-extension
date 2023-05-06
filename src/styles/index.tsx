import styled  from "styled-components";

export const Button = styled.button`
display: flex;
justify-content: center;
position: relative;
align-items: center;
background: #4344ce;
color: #FFF;
border: 0px solid #CCC;
border-radius: 5px;
width : 150px;
height : 30px;
line-height: 20px;
padding: 10px 17px;
font-size: 14px;
cursor: pointer;
outline: none;
overflow: hidden;
text-overflow: ellipsis;
transition: all .2s ease-in;

&:hover{
   background: #6860D7;
}  
`