import React,{ useState, useEffect, ReactNode} from "react";
import { PageStatus } from "../utils/";
import Signin from "./Signin";
import Load from "./Load"; 
import Main from "./Main";
import { User } from "../utils/";

export const PageController = ()=>{
    
    const [currentPage,setCurrentPage] = useState<PageStatus>(PageStatus.SIGNIN)
    const [filedata,setFileData] = useState<FileData>({passphrase:'',userlist:[]})

    interface FileData{
        passphrase : string,
        userlist : User[]
    } 
    
    useEffect(()=>{
    setFileData({passphrase:'',userlist:[]})
    })

    function renderPage(currentPage : PageStatus):any{
        switch(currentPage){
            case PageStatus.SIGNIN :
                return <Signin pageHandler = {setCurrentPage}/>    
            break;
            
            case PageStatus.SIGNUP :
                 return <Load pageHandler = {setCurrentPage} dataHandler = {setFileData} />
            break;

            case PageStatus.MAIN :
                return <Main pageHandler = {setCurrentPage} data = {filedata}/>
            break;

        }
    }

 return renderPage(currentPage);
}