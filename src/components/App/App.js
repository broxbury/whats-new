import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local,
      entertainment,
      health,
      science,
      technology,
      currentTopic: local
    }
  }

  selectTopic = (topic) => {
    this.setState({
       currentTopic: this.state[topic]
    });
  }

  filterSearch = (search) => {
    const searchTerm = search.toUpperCase(); 
    const newArticles = this.state.currentTopic.filter(article => {
     return article.headline.toUpperCase().includes(searchTerm)
    })
    this.setState({ currentTopic: newArticles });
  }

  render () {
    return (
      <div className="app">
        <SearchForm submitInput={this.filterSearch}/>
        <section className="below-header">
        <Menu selectTopic={this.selectTopic} currentTopic={this.state.currentTopic}/>
        <NewsContainer currentTopic={this.state.currentTopic}/>
        </section>
      </div>
    );
  }
}

export default App;
