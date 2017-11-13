import React, { Component } from 'react';
import News from './News'

const API_KEY = '62a5f2039f7e4057acc89f4c1fbf17dd';

class NewsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
      'news': []
    };
	}

	fetchNews(media) {
    const URL = 'https://newsapi.org/v1/articles?apiKey='+API_KEY+'&source=';
		// sortBy=top

		// .bind(this) para que reconozca el this.setState
		media.map(function(mediaSource, i) {
      fetch(URL+mediaSource)
				.then((res) => res.json())
				.then((data) => this.setState({'news': this.state.news.concat(data)}))
    }.bind(this));

  }

	componentDidMount() {
		this.fetchNews(this.props.media);
  }

	componentWillReceiveProps(nextProps) {
		if(nextProps !== this.props) {
			this.setState({'news': []})
			this.fetchNews(nextProps.media);
		}
	}


	render() {
		const news = this.state.news;
		const category = this.props.category;
		const newsCategory = [];
		const newsElements = [];

		news.map(function(source) {
			newsCategory.push(<h2 className="news-source" key={source.source}>{source.source}</h2>);
			source.articles.forEach((article) => {
				newsElements.push(
					<News key={article.publishedAt} category={category} data={article}  />
				);
			});
			newsCategory.push(<div className="card-columns">{newsElements}</div>);
		});

		return (
			<div className="news-list">{newsCategory}</div>
		)
	}
}

export default NewsList;
