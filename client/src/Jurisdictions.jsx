import React, { Component, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import USAMap from 'react-usa-map';
import BillComponent from './BillComponent';
import LoadingSpinner from './LoadingSpinner';

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: flex-start;
  margin: 50px;
`;

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedState: null,
    };

    this.mapHandler = this.mapHandler.bind(this);
  }

  mapHandler(e) {
    this.setState({
      selectedState: e.target.dataset.name,
    });
    this.props.updateState(e.target.dataset.name);
  }

  render() {
    return (
      <div className="App">
        <USAMap onClick={this.mapHandler} defaultFill="#f7f7f7" title="USA Map" />
      </div>
    );
  }
}

export default function Representatives({ jurisdictions }) {
  const [currentState, setCurrentState] = useState(null);
  const [sortSelection, setSortSelection] = useState('latest_action_desc');
  const [sortDisplay, setSortDisplay] = useState('Latest Action');
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  function getBills(state) {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.get('/bills', {
          params: {
            jurisdiction: `ocd-jurisdiction/country:us/state:${state}/government`,
            sort: sortSelection,
          },
        });

        setData(result.data);
        console.log(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }

  function updateState(target) {
    setCurrentState(target);
    getBills(target.toLowerCase());
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);

    if (e.target.textContent === 'Recently Updated') {
      setSortSelection('updated_desc');
      setSortDisplay('Recently Updated');
      getBills(currentState.toLowerCase());
    } else if (e.target.textContent === 'Recently Introduced') {
      setSortSelection('first_action_desc');
      setSortDisplay('Recently Introduced');
      getBills(currentState.toLowerCase());
    } else if (e.target.textContent === 'Latest Action') {
      setSortSelection('latest_action_desc');
      setSortDisplay('Latest Action');
      getBills(currentState.toLowerCase());
    }
  };

  return (
    <Container>
      <Map updateState={updateState} />
      {data
        ? (
          <SectionHeader>
            <h1>{data.results[0].jurisdiction.name}</h1>
            <h2>Bills</h2>
            <h4>{sortDisplay}</h4>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              View Bills Sorted By
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Recently Updated</MenuItem>
              <MenuItem onClick={handleClose}>Recently Introduced</MenuItem>
              <MenuItem onClick={handleClose}>Latest Action</MenuItem>
            </Menu>
          </SectionHeader>
        )
        : null}
      <Grid container spacing={2}>
        {data
          ? (
            data.results.map((bill) => (
              <Grid item key={bill.identifier} xs={12} md={6} lg={4}>
                <BillComponent bill={bill} />
              </Grid>
            ))
          )
          : null}
        {isLoading ? <LoadingSpinner /> : null}
      </Grid>
    </Container>
  );
}
