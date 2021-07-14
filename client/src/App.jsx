import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar/Navbar';
import GetStarted from './GetStarted';
import FindYourReps from './FindYourReps';
import WhatNext from './WhatNext';
import YourStateLegislature from './YourStateLegislature';
import FadeInSection from './FadeInSection';

const RepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BannerContainer = styled.div`
  background: #fff;
  height: 100vh;
`;

function App() {
  return (
    <>
      <BannerContainer id="showcase">
        <Navbar />
        {/* <GetStarted /> */}
      </BannerContainer>
      <RepContainer>
        <FindYourReps />
      </RepContainer>
      <FadeInSection>
        <YourStateLegislature />
      </FadeInSection>
      {/* <WhatNext /> */}
    </>
  );
}

export default App;
