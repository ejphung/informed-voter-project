/* eslint-disable max-len */
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AddressForm from './AddressForm';
import Representatives from './Representatives';
import FadeInSection from './FadeInSection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  color: white;
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

export default function FindYourReps() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function getReps(query) {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.get('/representatives', {
          params: {
            address: query,
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

  return (
    <>
      <AddressForm getReps={getReps} id="find-my-reps" />
      <FadeInSection>
        <Container>
          <TextContainer>
            <Header>Find Your Reps</Header>
            <Paragraph>
            Based on your address, we can find all the federal, state, county and local officials who represent you in government. Enter your full address above to get started.
            </Paragraph>
          </TextContainer>
          {data ? <Representatives officials={data.officials} /> : null}
        </Container>
      </FadeInSection>
    </>
  );
}
