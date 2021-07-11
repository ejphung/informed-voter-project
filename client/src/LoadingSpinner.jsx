import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const Spinner = styled.div`
animation: ${rotate360} 2s linear infinite;
transform: translateZ(0);
border-top: 3px solid #e7e7e7;
border-right: 3px solid #e7e7e7;
border-bottom: 3px solid #4c744e;
border-left: 3px solid #4c744e;
background: transparent;
width: 40px;
height: 40px;
border-radius: 50%;
position: fixed;
top: 50%;
left: 50%;
`;

function LoadingSpinner() {
  return (
    <Spinner />
  );
}

export default LoadingSpinner;
