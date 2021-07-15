import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    transition: 'transform 0.15s ease-in-out',
  },
  cardHovered: {
    transform: 'scale3d(1.05, 1.05, 1)',
  },
}));

export default function RepComponent({ rep }) {
  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });

  return (
    <Card
      elevation={3}
      classes={{ root: state.raised ? classes.cardHovered : '' }}
      onMouseOver={() => setState({ raised: true, shadow: 3 })}
      onMouseOut={() => setState({ raised: false, shadow: 1 })}
      raised={state.raised}
      zdepth={state.shadow}
      className={classes.root}
      style={{ backgroundColor: '#406682', color: '#fff' }}
    >
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px',
      }}
      >
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>
        <CardHeader
          style={{ display: 'flex', justifyContent: 'flex start', color: 'white' }}
          title={rep.name}
          subheader={rep.party}
        >
          <div>{rep.name}</div>
        </CardHeader>
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'flex start', alignItems: 'center',
        }}
        >
          <Button size="large" color="primary" href={rep.urls} target="_blank" rel="noreferrer">Website</Button>
          <IconButton onClick={() => console.log('call', rep.phones)}>
            <CallIcon style={{ color: 'white' }} />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
