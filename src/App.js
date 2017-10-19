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
      'media': ['techcrunch']
    };
    // this.state = {
    //   'sources': [],
    //   'category': 'technology',
    //   'media': ['techcrunch'],
    //   'news': []
    // };
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

  // fetchNews(media) {
  //   const URL = 'https://newsapi.org/v1/articles?sortBy=latest&apiKey='+API_KEY+'&source=';
  //   let newsList = [];
  //
  //   media.map(function(mediaSource, i) {
  //     fetch(URL+mediaSource).then((res) => res.json()).then((data) => {
  //       newsList.push(data);
  //     });
  //   });
  //
  //   this.setState({
  //       'news': newsList
  //   });
  // }

  handleCategoryChange(event) {
		this.setState({
			'category': event.target.value
		});
	}

  handleSourceChange(event) {
    //con slice() hago una copia del array en currentMedia en vez de una referencia
    //si hiciera una referencia, dentro de NewsList tanto this.props como prevProps son iguales
    //ya que se trata del mismo array, y no es posible comparar el estado actual con el previo.
    let currentMedia = this.state.media.slice();
    let media = event.target.value;

    console.log(currentMedia);

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
    // this.fetchNews(this.state.media);
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Nius</h1>
        </header>
        <Category sources={this.categories(this.state.sources)} value={this.state.category} onChange={this.handleCategoryChange} />
        <Sources sources={this.state.sources} category={this.state.category} media={this.state.media} onChange={this.handleSourceChange} />
        <NewsList category={this.state.category} media={this.state.media} />
      </div>
    );
  }

}

export default App;
