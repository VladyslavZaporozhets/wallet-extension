import React,{FC} from "react";
import { Container } from "./styles";


interface Propsprops {
    address : string,
    private_key : string
}
 const PromptItem : FC<Propsprops> = ({address,private_key}) =>{

    return (
        <Container>
           <p title = {address}>{address.length > 20 ? address.substring(0,25) + '...' : address }</p>
           <p title = {private_key}>{private_key.length > 20 ? private_key.substring(0,25) + '...' : private_key }</p>

        </Container>
    )
}
export default PromptItem;