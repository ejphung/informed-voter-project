/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Jurisdictions from './Jurisdictions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 20px;
  text-align: center;
  margin-top: 50px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 50vw;
  margin-bottom: 20px;
`;

const Header = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const Paragraph = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

export default function YourStateLegislature() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getReps();
  }, []);

  function getReps() {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios.get('/jurisdictions');
        setData(result.data.results);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }

  return (
    <Container id="find-your-reps">
      <TextContainer>
        <Header>Get Legislative Info About Your State</Header>
        <Paragraph>
          Click on your state to view legislative information for the House and Senate of the United States Congress.
        </Paragraph>
      </TextContainer>
      {data.length > 0 ? <Jurisdictions jurisdictions={data} /> : null}
    </Container>
  );
}
