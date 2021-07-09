import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 20px;
  text-align: center;
  margin-top: 100px;
  margin-left: 20px;
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

const GetStartedLink = styled.a`
  padding: 10px 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 1.1rem;
  border: 2px solid #fff;
  border-radius: 30px;

  &:hover {
    color: grey;
    background: #fff;
  }
`;

export default function GetStarted() {
  return (
    <Container>
      <TextContainer>
        <Header>Who Reps You?</Header>
        <Paragraph>
          Knowing who your representatives are and contacting their offices directly is the most effective way to change how our government works.
        </Paragraph>
        <GetStartedLink href="#find-my-reps">Get Started</GetStartedLink>
      </TextContainer>
    </Container>
  );
}
