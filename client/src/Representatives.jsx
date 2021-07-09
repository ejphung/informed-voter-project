import React from 'react';
import styled from 'styled-components';
import RepComponent from './RepComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default function Representatives({ officials }) {
  console.log(officials);

  return (
    <Container>
      {officials.map((rep) => (
        <RepComponent rep={rep} key={rep.name} />
      ))}
    </Container>
  );
}
