import React from 'react';
import PropTypes from 'prop-types';
import ArtistListItem from './ArtistListItem';

function Suggestions(props) {
  const { results, toggleSelection } = props;

  const options = results.map(r => (
    <ArtistListItem
      artist={r}
      key={r.name}
      onSelection={toggleSelection}
    />
  ));

  return <ul>{options}</ul>;
}

Suggestions.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  toggleSelection: PropTypes.func.isRequired,
};

export default Suggestions;
