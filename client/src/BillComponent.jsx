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

const Subject = styled.div`
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

export default function BillComponent({ bill }) {
  const classes = useStyles();

  return (
    <Card elevation={1} className={classes.root}>
      <CardHeader
        title={bill.identifier}
        subheader={bill.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'flex start', alignItems: 'left',
          }}
          >
            <div>
              <strong>Introduced in {bill.from_organization.name}</strong>
              <br />
            </div>
            <br /><br />
            <div>
              <strong>Latest Action Date: </strong>
              {bill.latest_action_date}
              <br />
            </div>
            <div>
              <strong>Latest Action Description: </strong>
              {bill.latest_action_description}
            </div>
            <div>
              <strong>Subject(s)</strong>
              {bill.subject.map((subject) => <Subject key={subject}>{subject}</Subject>)}
            </div>
          </div>
        </Typography>
      </CardContent>
      <Button size="large" color="primary" href="/" target="_blank" rel="noreferrer">Follow This Bill</Button>
      <Button size="large" color="primary" href={bill.openstates_url} target="_blank" rel="noreferrer">Learn More</Button>
    </Card>
  );
}
