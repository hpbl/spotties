import React from 'react';
import PropTypes from 'prop-types';
import './SelectedArtist.css';

function SelectedArtist(props) {
  const { artist } = props;

  return (
    <div className="SelectedArtist">
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
};

export default SelectedArtist;
