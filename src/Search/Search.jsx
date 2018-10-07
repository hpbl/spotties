import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import Suggestions from './Suggestions';
import SelectedArtist from './SelectedArtist';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      results: [],
      selectedArtists: [],
    };

    this.toggleArtistSelection = this.toggleArtistSelection.bind(this);
  }

  getInfo() {
    const { query, selectedArtists } = this.state;

    // TODO: Replace with API call result
    const fakeResults = [
      { name: 'Mombojó', selected: false },
      { name: 'Marsa', selected: false },
      { name: 'Barro', selected: false },
      { name: 'Academia da Berlinda', selected: false },
      { name: 'Siba', selected: false },
    ];

    const filteredBands = fakeResults.filter((band) => {
      const lowercasedBand = band.name.toLowerCase();
      const lowercasedQuery = query.toLocaleLowerCase();
      return lowercasedBand.includes(lowercasedQuery);
    });

    filteredBands.forEach((band, index) => {
      if (selectedArtists.filter(artist => artist.name === band.name).length > 0) {
        filteredBands[index] = { ...filteredBands[index], selected: true };
      }
    });

    this.setState({
      results: filteredBands,
    });
  }

  handleInputChange(newInput) {
    this.setState({
      query: newInput,
    }, () => {
      const { query } = this.state;
      if (query) {
        this.getInfo();
      }
    });
  }

  toggleArtistSelection(toggledArtist) {
    const { results } = this.state;
    const artistIndex = results.findIndex(artist => artist.name === toggledArtist.name);
    results[artistIndex] = { ...results[artistIndex], selected: !results[artistIndex].selected };

    let { selectedArtists } = this.state;
    if (results[artistIndex].selected) {
      selectedArtists.push(results[artistIndex]);
    } else {
      selectedArtists = selectedArtists.filter(artist => artist.name !== toggledArtist.name);
    }

    this.setState({
      results,
      selectedArtists,
    });
  }

  render() {
    const { results, selectedArtists } = this.state;
    const { placeholder } = this.props;

    return (
      <form>
        <input
          placeholder={placeholder}
          onChange={event => this.handleInputChange(event.target.value)}
        />
        <Suggestions results={results} toggleSelection={this.toggleArtistSelection} />
        {selectedArtists.length > 0 && (
          <div className="SelectedArtists">
            <div className="selectedArtistsTitle">
              <p>Selected artists</p>
              <button type="button">Create playlist</button>
            </div>
            <ul className="selectedArtistsList">{selectedArtists.map(artist => <SelectedArtist artist={artist} />)}</ul>
          </div>
        )}
      </form>
    );
  }
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Search;
