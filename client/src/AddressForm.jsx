import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// `;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60vw',
    marginTop: '-30px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function AddressForm({ getReps }) {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (query.length) {
      getReps(query);
    }
  }

  // const SearchButton = () => (
  //   <IconButton type="submit" className={classes.button}>
  //     <SearchIcon />
  //   </IconButton>
  // );

  return (

      <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
        <InputBase
          className={classes.input}
          placeholder="Enter your residential address here"
          inputProps={{ 'aria-label': 'search address' }}
          onInput={(e) => setQuery(e.target.value)}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

  );
}

{/* <FormContainer>
  <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
    <TextField
        onInput={(e) => setQuery(e.target.value)}
        value={query}
        id="outlined-full-width"
        label="Address"
        style={{ margin: 8 }}
        placeholder="Type here..."
        helperText="Provide your residential address"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        InputProps={{ endAdornment: <SearchButton /> }}
      />
  </form>
</FormContainer> */}