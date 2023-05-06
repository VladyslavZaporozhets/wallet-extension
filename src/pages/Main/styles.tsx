import styled  from "styled-components";

export const Container = styled.div`
display : flex;
width :100%;
height : 100%;
align-items : center;
justify-Content : center;
`
export const InnerContainer = styled.div`

width : 500px;
height : 450px;
border : 0px solid gray;
color : white;
background : #222222;
 h1
 {
    margin-top:15px;
    font-size : 22px;
    font-family: sans-serif;
 }
 input {
    width:120px;
    height : 25px;
    background : #2c2c2c;
    border : 1px solid #404040;
    color : white;
    outline : none;
    text-align : center;
    
}  
`
export const ImageWrapper = styled.div`
height : 150px;
display: flex;
justify-content: center;
align-items: center;
` 

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height : 200px;
`
export const ControlContainer = styled.div`
    
    display: flex;
    justify-content: flex-end;
    margin-bottom : 20px;

`
 