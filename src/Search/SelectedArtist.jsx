import React from 'react';
import PropTypes from 'prop-types';
import './SelectedArtist.css';

function SelectedArtist(props) {
  const { artist, clickHandler } = props;

  return (
    <div
      className="SelectedArtist"
      role="button"
      onClick={() => clickHandler(artist)}
      onKeyPress={() => clickHandler(artist)}
      tabIndex={0}
    >
      <div className="ArtistImage" />
      <p className="ArtistName">{artist.name}</p>
    </div>
  );
}

SelectedArtist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default SelectedArtist;
