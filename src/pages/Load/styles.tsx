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
    margin-top : 40px;
    font-size : 18px;
    font-family: sans-serif;
 }
 input {
    width:400px;
    height : 25px;
    background : #2c2c2c;
    border : 1px solid #404040;
    color : white;
    outline : none;
    text-align : center;
    margin-top :30px;
}
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height : 200px;
`
export const PhraseContainer = styled.div`
    display:flex;
    height : 300px;
    justify-content: space-around;

`