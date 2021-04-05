import React, { useState } from 'react';
import '../Styling/Form.css';

// eslint-disable-next-line react/prop-types
function Form({ onSearch }) {
  const [subreddit, setSubreddit] = useState('javascript');

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(subreddit);
  };

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <label className="label" htmlFor="reddit">
        r /
        <input
          className="input"
          type="text"
          name="subreddit"
          value={subreddit}
          onChange={(event) => setSubreddit(event.target.value)}
        />
      </label>
      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default Form;
