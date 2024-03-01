import React from 'react';

const MoviePageForm = ({ onSubmit, onChange, value }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        type="text"
        placeholder="Search films"
        onChange={onChange}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default MoviePageForm;
