import React, { Component, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import USAMap from 'react-usa-map';
import BillComponent from './BillComponent';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}

export default function Representatives({ jurisdictions }) {
  const [currentState, setCurrentState] = useState(null);
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function getBills(state) {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.get('/bills', {
          params: {
            jurisdiction: `ocd-jurisdiction/country:us/state:${state}/government`,
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

  return (
    <Container>
      <Map updateState={updateState} />
      {data
        ? (
          data.results.map((bill) => (
            <BillComponent key={bill.identifier} bill={bill} />
          ))
        )
        : null}
    </Container>
  );
}
