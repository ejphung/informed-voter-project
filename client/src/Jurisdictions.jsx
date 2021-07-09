import React from 'react';
import styled from 'styled-components';
import StateComponent from './StateComponent';
import FadeInSection from './FadeInSection';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export default function Representatives({ jurisdictions }) {
  console.log(jurisdictions);

  return (
    <Container>
      {jurisdictions.map((state) => (
        <StateComponent key={state.name} state={state} />
      ))}
    </Container>
  );
}
