import React, { FC, useEffect, useState } from 'react';
import ExtensionLayout from '../../components/Layout/ExtensionLayout';
import { Container,InnerContainer,ControlContainer } from './styles';
import { Button } from '../../styles';
import { PageStatus } from '../../utils/index'; 
import PromptItem from '../../components/PromptItem';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Web3 from 'web3'
import { seeds } from '../../utils/seeds';
import { clipboard } from '@extend-chrome/clipboard'
import { Encode, Decode } from '../../utils/index';
import { User } from '../../utils/index';

interface FileData{
    passphrase : string,
    userlist : User[]
} 
interface HomeProps {
  pageHandler : React.Dispatch<React.SetStateAction<PageStatus>>
  data : FileData
}


const Main: FC<HomeProps> = ({ pageHandler,data}) => {
  const [users,setUsers] = useState<User[]>([])
  const [count,setCount] = useState('0')
  const [phrase,setPhrase] = useState('')
  const [keys,setKeys] = useState<number[]>([])
  
  const generatePassPhrase = (len:number)=>{
    let mnemonic = ""
    const keylist : number[] = []
    for (let index = 0; index < len; index++) {
        let i = Math.floor(Math.random() * 2048)
        if(index != 0){
            mnemonic += (" ")
        }
        keylist.push(i)
        mnemonic += seeds[i]
    }
    setKeys(keylist)
    return mnemonic
  }

  const GenerateUsers = ()=>{
    if (isNaN(parseInt(count)) || parseInt(count) == 0 ){
        alert('Enter the number correctly.')
        setCount('')
        return;
    }
    var new_users : Array<User>  = []
    const web3 = new Web3(new Web3.providers.HttpProvider('https://1rpc.io/eth'));
    for(var i = 0 ; i < parseInt(count) ; i ++){
        var account = web3.eth.accounts.create();
        users.push({
            'address' : account.address,
            'key' : account.privateKey
        })
    }
    if(users.length == 0)
        setUsers(new_users)
    else{
        setUsers([])
        setUsers(new_users.concat(users).reverse())
    }
    if(phrase == '')
        setPhrase(generatePassPhrase(9)) 
    
}
  const EncryptJson = (users : Array<User>, keys : Array<number>)=>{
    const name = "Oleksandr Tyshkov"
    if(keys.length != 9){
        alert('key error')
        return;
    }
    const encrypted_name = Encode(name,keys)
    var data : User[] = []
    for(var i = 0 ;i < users.length ;i ++ ){
        const addr = Encode(users[i].address,keys)
        const pkey = Encode(users[i].key,keys)
        data.push({
            address : addr,
            key : pkey
        })
    }
    return {'name' : encrypted_name,'data' : data}

}

const onSave = ()=>{
    if(users.length == 0){
        alert('empty users')
        return
    }
    const result = EncryptJson(users,keys)
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(result)
      )}`;
      const link = document.createElement("a");
      link.href = jsonString;
      link.download = "data.json";
      link.click();
}
const onClear = ()=>{
    setPhrase('')
    setUsers([])
    setKeys([])
    setCount('0')
}
useEffect(()=>{
if(data['passphrase'] != ''){

    setPhrase(data['passphrase'])
    setUsers(data['userlist'])

    const key_str_list =  data['passphrase'].split(" ")
    const keylist :number[] = []
    
    for(var i = 0; i< 9 ; i++){
    let num =  seeds.indexOf(key_str_list[i])
    keylist.push(num)
    }
    setKeys(keylist) 

}
},[])

  return (
    <ExtensionLayout previousPage = {()=>pageHandler(PageStatus.SIGNIN)}>
          <Container>
              <InnerContainer>
                    <h1>Generate Users</h1>
                    <ControlContainer>
                        <input type = 'text' placeholder='Number of Accounts' style={{marginRight:10}} value = {count} onChange = {e=>setCount(e.target.value)} />
                        <Button style = {{width:100}} onClick = {GenerateUsers}>Generate</Button>
                        <Button style = {{width:100,marginLeft:10}} onClick = {onClear}>Clear</Button>
                        <Button style = {{width:100,marginLeft:10,marginRight:23}} onClick = {onSave}>Save</Button>
                    </ControlContainer>
                    <input type = 'text' placeholder='Passphrase' style = {{width : '90%',cursor:'pointer'}} value = {phrase} onClick={e=>{clipboard.writeText(phrase); if(phrase != '') alert('copied')}} onChange = {e=>setPhrase(e.target.value)} readOnly />
                    <PromptItem address = "Address" private_key = "Private key"></PromptItem>
                    <Scrollbars 
                        style={{height: 260 }}
                        autoHide
                        autoHideTimeout={1000}
                        autoHideDuration={200}
                        
                     >
                            {users.map((item,i)=>(
                            <PromptItem address = {item.address} private_key = {item.key}></PromptItem>
                            )) }                     
                    </Scrollbars> 
                    <div style = {{height:20,fontSize:14,textAlign:'right',borderTop:'1px solid #ffffff12'}} >Total :&nbsp; {users.length}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    {/* <ListContainer>
                    </ListContainer>     */}
              </InnerContainer>
             
             
          </Container>
    </ExtensionLayout>
  );
};

export default Main;
