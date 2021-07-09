import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar/Navbar';
import FindYourReps from './FindYourReps';
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
      </Container>
      <FadeInSection>
        <FindYourReps />
      </FadeInSection>
      <FadeInSection>
        <YourStateLegislature />
      </FadeInSection>
    </>
  );
}

export default App;
