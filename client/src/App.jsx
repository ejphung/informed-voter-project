import React from 'react';
import Button from '@material-ui/core/Button';

function App({ name }) {
  return (
    <>
      <h1>
        Hello {name}
      </h1>
      <Button variant="contained">this is a material UI button</Button>
    </>
  );
}

export default App;
