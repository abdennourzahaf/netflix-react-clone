import React from 'react';
import { Feature } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { OptFormContainer } from '../containers/opt-form';

export default function Home() {
  return (
    <>
      <HeaderContainer dark={2}>
        <Feature>
          <Feature.Title>Unlimited films, TV shows and more.</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptFormContainer />
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
