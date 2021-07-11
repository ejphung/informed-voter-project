import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import RepComponent from './RepComponent';
import FadeInSection from './FadeInSection';

export default function Representatives({ officials }) {
  console.log(officials);

  return (
    <Container>
      <Grid container spacing={3}>
        {officials.filter((rep) => rep.name.toLowerCase() !== 'vacant').map((rep) => (
          <Grid item key={rep.name} xs={6}>
            <RepComponent rep={rep} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
