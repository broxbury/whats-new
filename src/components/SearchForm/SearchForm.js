import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  updateInput = (e) => {
    this.setState({ search: e.target.value});
  }

  submitInput = (e) => {
    e.preventDefault();
    this.props.submitInput(this.state.search);
    this.setState({ search: '' });
  }

  render() {
    return (
      <header>
        <form className="header-container" onSubmit={(e) => this.submitInput(e)}>
          <h1 className="whats-new-header">What's</h1><h1 className="whats-new-header-red">New?</h1>
          <input onChange={(e) => this.updateInput(e)} value={this.state.search} className="search-input" type="text" placeholder="SEARCH ARTICLES HERE"></input>
          <button className="search-button">Search</button>
        </form>
      </header>
    )
  }
}

export default SearchForm;