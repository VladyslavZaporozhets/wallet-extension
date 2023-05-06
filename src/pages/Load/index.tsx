import React, { FC, useEffect, useRef, useState } from 'react';

import ExtensionLayout from '../../components/Layout/ExtensionLayout';
import { ButtonWrapper, Container,InnerContainer,PhraseContainer} from './styles';
import { Button } from '../../styles';
import { seeds } from '../../utils/seeds';
import { PageStatus } from '../../utils/index'; 
import { User } from '../../utils/index'; 
import { Decode } from '../../utils/index';

interface FileData{
  passphrase : string,
  userlist : User[]
} 
interface HomeProps {
  pageHandler : React.Dispatch<React.SetStateAction<PageStatus>>
  dataHandler : React.Dispatch<React.SetStateAction<FileData>>
}

const Load: FC<HomeProps> = ({ pageHandler,dataHandler}) => {
  const [value, setValue] = useState('')
  const [mode,setMode] = useState(0) // 0 - select file 1 -  analysis file
  const [content,setContent] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e:any) => {
    let files = e.target.files;
    if (!files.length) {
      alert('No file select');
      return;
    }
    let file = files[0];
    let that = this;
    let reader = new FileReader();
    reader.onload = function(e) {
      const str =  e.target?.result
      if (typeof(str) == 'string') {

       const data =  JSON.parse(str)
       setContent(str)
       setMode(1)
      
      }else{
        alert('File read error')
        setMode(0)
      }
    };
    reader.readAsText(file);
  }
  const onLoad = ()=>{
    if(mode == 0)
        fileRef.current?.click()
    else 
       {

        const key_str_list =  value.split(" ")
        const keylist :number[] = []
        if(key_str_list.length == 9){
          for(var i = 0; i< 9 ; i++){
            let num =  seeds.indexOf(key_str_list[i])
            keylist.push(num)
          }
          startParse(keylist)
        }else{
         alert('Enter the Passphrase correctly')   
         setValue('')
         setMode(0)
        }
       }
  }
  const startParse = (keylist:number[])=>{

    const data =  JSON.parse(content)
    if(data['name']){
      const verifier =  Decode(data['name'],keylist)
      if(verifier == 'Oleksandr Tyshkov'){
        if(data['data']){
         const userlist =  DecryptJson(data['data'],keylist) 
          dataHandler({
            passphrase : value,
            userlist : userlist
          })
          pageHandler(PageStatus.MAIN)   
        }
        else
        {
          alert('Parse Error')
          setValue('')

          setMode(0)
        }
      }else{
        alert('Wrong Passphrase')
        setValue('')
        setMode(0)
      }
    }else{
      alert('Parse Error')
      setValue('')
      setMode(0)
    } 
    
  }
  const DecryptJson = (users : Array<User>, keys : Array<number>)=>{
    var data : User[] = []
    for(var i = 0 ;i < users.length ;i ++ ){
        const addr = Decode(users[i].address,keys)
        const pkey = Decode(users[i].key,keys)
        data.push({
            address : addr,
            key : pkey
        })
    }
  return data
}


  useEffect(()=>{
      
  },[])

  return (
    <ExtensionLayout previousPage={()=>pageHandler(PageStatus.SIGNIN)}>
          <Container>
              <InnerContainer>
                  <h1>Import File</h1>
                  <input type = 'text' placeholder='Enter the Passphrase' value = {value} onChange = {e=>setValue(e.target.value)} />
                  
              <ButtonWrapper>
                <Button onClick = {onLoad} >{mode == 0 ? 'Select File' : 'Load Data'}
                    <input type="file" onChange={handleFileSelect} style = {{display:'none'}} ref = {fileRef} accept = "application/json" />
                </Button>
              </ButtonWrapper>          
              </InnerContainer>
                          
          </Container>
         
    </ExtensionLayout>
  );
};

export default Load;