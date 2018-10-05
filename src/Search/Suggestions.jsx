import React from 'react';
import PropTypes from 'prop-types';

function Suggestions(props) {
  const { results } = props;

  const options = results.map(r => (
    <li key={r}>
      {r}
    </li>
  ));

  return <ul>{options}</ul>;
}

Suggestions.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Suggestions;
