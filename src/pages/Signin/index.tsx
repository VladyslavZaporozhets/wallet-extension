import React, { FC, useEffect } from 'react';

import ExtensionLayout from '../../components/Layout/ExtensionLayout';
 
import WalletIcon from '../../assets/image/wallet.png'
import { Container,InnerContainer,ImageWrapper,ButtonWrapper } from './styles';
import { Button } from '../../styles';
import { PageStatus } from '../../utils/index'; 
interface HomeProps {
  pageHandler : React.Dispatch<React.SetStateAction<PageStatus>>
}

const Signin: FC<HomeProps> = ({ pageHandler}) => {
  return (
    <ExtensionLayout previousPage = {undefined}>
          <Container>
              <InnerContainer>
                  <ImageWrapper>
                    <img src = {WalletIcon} />
                  </ImageWrapper>
                  <h1>
                    Pavlo Wallet
                  </h1>
                  <ButtonWrapper>                  
                  <Button onClick = {e=>pageHandler(PageStatus.SIGNUP)} >Load File</Button>
                  <Button style = {{marginLeft:50}} onClick = {e=>pageHandler(PageStatus.MAIN)}   >Generate</Button>

                  </ButtonWrapper>
              </InnerContainer>
             
             
          </Container>
    </ExtensionLayout>
  );
};

export default Signin;