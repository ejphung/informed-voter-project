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
  color: white;
`;

const Paragraph = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  color: white;
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
    <Container>
      <TextContainer>
        <Header>Get Bill Info From Your State Legislature</Header>
        <Paragraph>
          Click on your state to view legislation by the specified criteria below.
        </Paragraph>
      </TextContainer>
      {data.length > 0 ? <Jurisdictions jurisdictions={data} /> : null}
    </Container>
  );
}
