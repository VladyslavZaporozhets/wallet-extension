import { css } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
// background : ${props=>props.theme.background} !important;
color : white;
width : 100%;
height : 100%;
 
`
export const PreviousLink = styled.p`
position : absolute;
left : 10px;
top : 0px;
span{
    display : flex;
    cursor : pointer;
}
a {
    color : white;
    font-style : normal;
    text-decoration : auto !important;
    opacity : 70%;
}
a:hover {
    opacity : 100%;
}
`