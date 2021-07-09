import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 500px;
  min-width: 400px;
  margin: 4px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 4px;
`;

export default function RepComponent({ rep }) {
  return (
    <Container>
      <Avatar />
      <ProfileContainer>
        <div>{rep.name}</div>
        <div>{rep.party}</div>
      </ProfileContainer>
    </Container>
  );
}