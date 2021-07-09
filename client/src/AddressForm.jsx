import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
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

  const SearchButton = () => (
    <IconButton type="submit" className={classes.button}>
      <SearchIcon />
    </IconButton>
  );

  return (
    <FormContainer>
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
    </FormContainer>
  );
}
