import styled from "styled-components";


export const CommonButton = styled.button`

background : ${props => props.theme.buttonBackground} !important;

color : white;
border-radius : 5px;
border : 0px solid gray;

&:hover {
 background : #6c65cd !important;
}
`