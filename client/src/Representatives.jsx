import React from 'react';
import styled from 'styled-components';
import RepComponent from './RepComponent';
import FadeInSection from './FadeInSection';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export default function Representatives({ officials }) {
  console.log(officials);

  return (
    <Container>
      {officials.filter((rep) => rep.name.toLowerCase() !== 'vacant').map((rep) => (
        <FadeInSection key={rep.name}>
          <RepComponent rep={rep} />
        </FadeInSection>
      ))}
    </Container>
  );
}
