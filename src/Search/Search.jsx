import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import Suggestions from './Suggestions';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      results: [],
    };
  }

  getInfo() {
    const { query } = this.state;

    // TODO: Replace with API call result
    const fakeResults = ['Mombojó', 'Marsa', 'Barro', 'Academia da Berlinda', 'Siba'];

    const filteredBands = fakeResults.filter((band) => {
      const lowercasedBand = band.toLowerCase();
      const lowercasedQuery = query.toLocaleLowerCase();
      return lowercasedBand.includes(lowercasedQuery);
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

  render() {
    const { results } = this.state;
    const { placeholder } = this.props;

    return (
      <form>
        <input
          placeholder={placeholder}
          // ref={(input) => { this.search = input; }}
          onChange={event => this.handleInputChange(event.target.value)}
        />
        <Suggestions results={results} />
      </form>
    );
  }
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Search;
