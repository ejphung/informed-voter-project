import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar/Navbar';
import GetStarted from './GetStarted';
import FindYourReps from './FindYourReps';

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
      <FindYourReps />
    </>
  );
}

export default App;
