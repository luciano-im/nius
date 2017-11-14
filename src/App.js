import React, { Component } from 'react';
import NewsList from './components/NewsList';
import Category from './components/Category';
import Sources from './components/Sources';

class App extends Component {
  constructor(props) {
		super(props);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSourceChange = this.handleSourceChange.bind(this);
		this.state = {
      'sources': [],
      'category': 'technology',
      'media': []
    };
	}

  categories(sources) {
    let lookup = {};
    let category = [];
    sources.forEach((source) => {
      if(!(source.category in lookup)) {
        lookup[source.category] = true
        category.push(source.category);
      }
    });

    return category;
  }

  fetchSources() {
    const URL = 'https://newsapi.org/v1/sources?language=en';

    fetch(URL).then((res) => res.json()).then((data) => {
      // update state with API data
      this.setState({
        'sources': data.sources
      });
    });
  }

  handleCategoryChange(event) {
		this.setState({
			'category': event.target.value,
      'media': []
		});
	}

  handleSourceChange(event) {
    //con slice() hago una copia del array en currentMedia en vez de una referencia
    //si hiciera una referencia, dentro de NewsList tanto this.props como prevProps son iguales
    //ya que se trata del mismo array, y no es posible comparar el estado actual con el previo.
    let currentMedia = this.state.media.slice();
    let media = event.target.value;

    if (event.target.checked === true) {
      currentMedia.push(media);
    } else {
      let index = currentMedia.indexOf(media);
      if (index > -1) {
        currentMedia.splice(index, 1);
      }
    }

    this.setState({
      'media': currentMedia
    });

  }

  componentWillMount() {
    this.fetchSources();
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="app-info">
            <span className="app-developed">Designed & developed by <a href="http://www.luciano.im/">Luciano Muñoz</a></span>
            <span className="app-code"><a href="https://github.com/luchisds/nius"><i className="fa fa-github" aria-hidden="true"></i> View Code</a></span>
          </div>
          <h1 className="app-title"><i className="fa fa-newspaper-o" aria-hidden="true"></i> Nius</h1>
          <span className="app-powered">Powered by <a href="https://newsapi.org/">News API</a></span>
          <Category sources={this.categories(this.state.sources)} value={this.state.category} onChange={this.handleCategoryChange} />
        </header>
        <Sources sources={this.state.sources} category={this.state.category} media={this.state.media} onChange={this.handleSourceChange} />
        <NewsList category={this.state.category} media={this.state.media} />
      </div>
    );
  }

}

export default App;
