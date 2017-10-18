import React, { Component } from 'react';
import News from './News'

const API_KEY = '62a5f2039f7e4057acc89f4c1fbf17dd';

class NewsList extends Component {
	constructor(props) {
		super(props);
		this.fetchNews = this.fetchNews.bind(this);
		this.state = {
      'news': []
    };
	}

	fetchNews(media) {
    const URL = 'https://newsapi.org/v1/articles?sortBy=top&apiKey='+API_KEY+'&source=';
    let newsList = [];

    media.map(function(mediaSource, i) {
      fetch(URL+mediaSource).then((res) => res.json()).then((data) => {
        newsList.push(data);
      });
    });

		return newsList;
  }

	// componentDidUpdate(prevProps, prevState) {
	// 	let news = this.fetchNews(prevProps.media);
	// 	this.setState({
	// 		'news': news
	// 	});
	// }

	componentWillMount() {
    let news = this.fetchNews(this.props.media);
		this.setState({
			'news': news
		});
  }

	componentWillReceiveProps(nextProps) {
	  // console.log(nextProps);
		// console.log(this.props.media);
		// console.log(nextProps.media);
		let news = this.fetchNews(nextProps.media);
		this.setState({
			'news': news
		});
	}

	render() {
		const news = this.state.news;
		const category = this.props.category;
		const newsElements = [];

		news.map(function(source) {
			newsElements.push(<h2 key={source.source}>{source.source}</h2>);
			source.articles.forEach((article) => {
				newsElements.push(
					<News key={article.publishedAt} category={category} data={article}  />
				);
			});
		});

		return (
			<div>{newsElements}</div>
		)
	}
}

export default NewsList;
