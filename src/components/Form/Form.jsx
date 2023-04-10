import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledInput, StyledSearchBtn } from './Form.styled';

const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState(' ');

  const handleChange = e => {
    // setQuery(e.target);
    const { value } = e.target;
    setQuery(value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        onChange={handleChange}
        value={query}
        placeholder="Search a movie"
      />
      <StyledSearchBtn>Search</StyledSearchBtn>
    </StyledForm>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
