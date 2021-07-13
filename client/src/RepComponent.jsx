import React from 'react';
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
  },
}));

export default function RepComponent({ rep }) {
  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.root} style={{ backgroundColor: '#e3f2fd', color: '#0d47a1' }}>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px',
      }}
      >
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>
        <CardHeader
          style={{ display: 'flex', justifyContent: 'flex start' }}
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
            <CallIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
