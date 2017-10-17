import React, { Component } from 'react';
import NewsList from './components/NewsList';
import Category from './components/Category';
import Sources from './components/Sources';

const API_KEY = '62a5f2039f7e4057acc89f4c1fbf17dd';

const NEWS = {"status":"ok",
               "source":
               "techcrunch",
               "sortBy":"top",
               "articles":[
                  {"author":"Matthew Panzarino","title":"Apple would like to remind the FCC that it can’t activate imaginary FM radios that iPhones don’t have","description":"Apple responded today to FCC Commissioner Ajit Pai, who issued a statement that “urged” Apple to activate the FM chips that he claimed are in iPhones in..","url":"https://techcrunch.com/2017/09/28/whose-fcc-is-this/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/09/iphone_xray.jpg","publishedAt":"2017-09-29T02:24:34Z"},
                  {"author":"Josh Constine","title":"Google is building a smart screen competitor to Amazon’s Echo Show","description":"Multiple sources tell TechCrunch that Google is building a tabletop smart screen for video calling and more that will compete with Amazon's Echo Show. The..","url":"https://techcrunch.com/2017/09/28/google-homescreen/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/09/google-competitor-amazon-echo-show.jpg","publishedAt":"2017-09-28T23:58:09Z"},
                  {"author":"Ron Miller","title":"BlackBerry, yes BlackBerry, is making a comeback as a software company","description":"When you think about dead companies walking, BlackBerry was clearly one that came to mind, but under the leadership of CEO John Chen, the company is actually..","url":"https://techcrunch.com/2017/09/28/blackberry-yes-blackberry-is-making-a-comeback-as-a-software-company/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/09/gettyimages-503650224.jpg","publishedAt":"2017-09-28T19:39:41Z"},
                  {"author":"Jonathan Shieber","title":"Fidelity CEO Abigail Johnson says the company is mining cryptocurrencies","description":"Fidelity Investments, one of the world's largest investment firms with $2.3 trillion in managed assets, is taking a long look at cryptocurrencies.  The..","url":"https://techcrunch.com/2017/09/28/fidelity-ceo-abigail-johnson-says-the-company-is-mining-cryptocurrencies/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/09/gettyimages-143349700.jpg","publishedAt":"2017-09-28T17:35:09Z"}
               ]
             };


class App extends Component {
  constructor(props) {
		super(props);
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
		this.state = {
      'sources': [],
      'category': 'technology',
      'media': ['techcrunch'],
      'news': []
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

    return category
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

  fetchNews(media) {
    const URL = 'https://newsapi.org/v1/articles?sortBy=latest&apiKey='+API_KEY+'&source=';
    let newsList = [];

    media.map(function(mediaSource, i) {
      fetch(URL+mediaSource).then((res) => res.json()).then((data) => {
        newsList.push(data);
      });
    });

    this.setState({
        'news': newsList
    });
  }

  handleCategoryChange(event) {
		this.setState({
			'category': event.target.value
		});
	}

  componentWillMount() {
    this.fetchSources();
    this.fetchNews(this.state.media);
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Nius</h1>
        </header>
        <Category sources={this.categories(this.state.sources)} value={this.state.category} onChange={this.handleCategoryChange} />
        <Sources sources={this.state.sources} category={this.state.category} />
        <NewsList news={this.state.news} />
      </div>
    );
  }

}

export default App;
