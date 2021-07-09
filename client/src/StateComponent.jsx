import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 200px;
  height: 50px;
  margin: 1px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 4px;
`;

export default function RepComponent({ state }) {
  return (
    <Container>
      <ProfileContainer>
        <div><strong>{state.name}</strong></div>
      </ProfileContainer>
    </Container>
  );
}