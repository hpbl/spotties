import React from 'react';
import PropTypes from 'prop-types';
import './ArtistListItem.css';

function ArtistListItem(props) {
  const { artist, onSelection } = props;

  return (
    <div className="ArtistListItem">
      <input
        type="checkbox"
        value={artist}
        defaultChecked={artist.selected}
        onChange={() => onSelection(artist)}
      />
      <li key={artist.name}>
        {artist.name}
      </li>
    </div>
  );
}

ArtistListItem.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired,
  onSelection: PropTypes.func.isRequired,
};

export default ArtistListItem;
