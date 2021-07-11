import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BillComponent({ bill }) {
  const classes = useStyles();

  return (
    <Card elevation={1} className={classes.root}>
      <CardHeader
        title={bill.identifier}
        subheader={bill.title}>
      </CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          <strong>Latest Action Date:</strong><br />
          {bill.latest_action_date}<br />
          <strong>Latest Action Description:</strong><br />
          {bill.latest_action_description}
        </Typography>
      </CardContent>
      <Button size="large" color="primary" href={bill.openstates_url} target="_blank" rel="noreferrer">Learn More</Button>
    </Card>
  );
}