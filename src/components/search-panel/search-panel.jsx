// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onTermChange = (e) => {
    // eslint-disable-next-line react/prop-types
    const {onSearchChange = () => {}} = this.props;
    this.setState({
      term: e.target.value
    });

    onSearchChange(e.target.value);
  };

  render() {
    return (
      <input type="text"
             className="form-control search-input"
             placeholder="type to search"
             value={this.state.term}
             onChange={ this.onTermChange } />
    );
  }
}
