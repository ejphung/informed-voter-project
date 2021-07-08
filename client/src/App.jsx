import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

function App({ name }) {
  return (
    <>
      <h1>
        Hello {name}
      </h1>
      <Button
        endIcon={<SaveIcon />}
        size="large"
        variant="contained"
        color="primary">
        this is a material UI button
      </Button>
    </>
  );
}

export default App;
