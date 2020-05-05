import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import './App.css';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      science
    }
  }

  render () {
    return (
      <div className="app">
        <SearchForm />
        <section className="below-header">
        <Menu />
        <NewsContainer news={this.state}/>
        </section>
      </div>
    );
  }

}

export default App;
