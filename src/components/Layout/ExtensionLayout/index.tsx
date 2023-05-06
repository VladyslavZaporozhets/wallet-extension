
import React, { FC,ReactNode } from 'react';

import {  
       Container ,
       PreviousLink
} from './styles';
import LeftIcon from '../../../assets/image/left_arrow.png'
 

interface ExtensionLayoutProps {
  previousPage ?: Function,
  children ?: ReactNode
}

const ExtensionLayout: FC<ExtensionLayoutProps> = ({ previousPage,children}) => {
 
return (
    <Container>
        { previousPage != null &&
        <PreviousLink >
           <span>
            <img src = {LeftIcon} onClick={e=>previousPage()}/>
                
           </span>
        </PreviousLink> }
       {children}
    </Container>
  );
};

export default ExtensionLayout;