import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar/Navbar';
import GetStarted from './GetStarted';
import FindYourReps from './FindYourReps';
import WhatNext from './WhatNext';
import YourStateLegislature from './YourStateLegislature';
import FadeInSection from './FadeInSection';

const Container = styled.div`
  background: #fff;
  height: 100vh;
`;

function App() {
  return (
    <>
      <Container id="showcase">
        <Navbar />
        <GetStarted />
      </Container>
      <FadeInSection>
        <FindYourReps />
      </FadeInSection>
      <FadeInSection>
        <YourStateLegislature />
      </FadeInSection>
      <FadeInSection>
        <WhatNext />
      </FadeInSection>
    </>
  );
}

export default App;
