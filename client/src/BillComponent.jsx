import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 200px;
  margin: 1px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 4px;
`;

export default function BillComponent({ bill }) {
  return (
    <Container>
      <ProfileContainer>
        <div><strong>{bill.identifier}</strong></div>
        <div>{bill.latest_action_date}</div>
        <div>{bill.title}</div>
        <a href={bill.openstates_url}>Learn More</a>
      </ProfileContainer>
    </Container>
  );
}