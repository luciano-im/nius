import React, { Component } from 'react';
import News from './News'

const API_KEY = '62a5f2039f7e4057acc89f4c1fbf17dd';

class NewsList extends Component {
	constructor(props) {
		console.log('constructor');
		super(props);
		this.state = {
      'news': []
    };
	}

	fetchNews(media) {
    const URL = 'https://newsapi.org/v1/articles?apiKey='+API_KEY+'&source=';
		// sortBy=top
    let newsList = [];

    // media.map(function(mediaSource, i) {
    //   fetch(URL+mediaSource).then((res) => res.json()).then((data) => {
    //     newsList.push(data);
    //   });
    // });

		// .bind(this) para que reconozca el this.setState
		media.map(function(mediaSource, i) {
      fetch(URL+mediaSource)
				.then((res) => res.json())
				.then((data) => this.setState({'news': this.state.news.concat(data)}))
    }.bind(this));

		// this.setState({
		// 	'news': newsList
		// });

		// return newsList;
  }

	componentDidMount() {
		console.log('componentDidMount');
		console.log('this.props.media: ', this.props.media);
		this.fetchNews(this.props.media);
    // let news = this.fetchNews(this.props.media);
		// this.setState({
		// 	'news': news
		// });
  }

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps');
		console.log('nextProps.media: ', nextProps.media);
		console.log('this.props.media: ', this.props.media);
		if(nextProps.media !== this.props.media) {
		  // let news = this.fetchNews(nextProps.media);
			// console.log(news);
			// this.setState({
			// 	'news': news
			// });
			this.fetchNews(nextProps.media);
		}
	}


	render() {
		console.log('render');
		const news = this.state.news;
		const category = this.props.category;
		const newsElements = [];
		console.log('news: ', news);

		news.map(function(source) {
			console.log('source: ', source);
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
