import React from 'react';
import styled from 'styled-components';
import FadeInSection from './FadeInSection';
import ContactYourRep from './ContactYourRep';

const Container = styled.div`
  margin-top: 100px;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  height: 100px;
  line-height: 100px;
  font-size: 36px;
  text-align: center;
  font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  margin-top: 20px;
`;

const ContentContainer = styled.div`
  width: 50vw;
`;

export default function WhatNext() {
  return (
    <Container>
      <FadeInSection>
        <Header>WHAT NEXT?</Header>
        <ContentContainer>Ensuring your reps share your values starts with getting to know them and making sure they know how the community feels about issues they care about.</ContentContainer>
        <Header>Step 1: Done</Header>
        <div>Know Your Reps</div>
        <Header>Step 2</Header>
        <div>Make Contact with Your Reps</div>
        <ContentContainer>Even if you reach out and say "Hey, I recently learned about your role and am interested in what you do", it could go a long way to put your reps on notice that their community is paying attention and cares about the decisions they make.</ContentContainer>
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <ContactYourRep /> */}
      </FadeInSection>
    </Container>
  );
}