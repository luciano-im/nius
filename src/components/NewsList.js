import React, { Component } from 'react';
import News from './News'

class NewsList extends Component {
	render() {
		const news = this.props.news;
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
