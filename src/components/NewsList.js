import React, { Component } from 'react';
import News from './News'

class NewsList extends Component {
	render() {
		const newsElements = [];
		let source = this.props.source;

		this.props.news.articles.forEach((article) => {
			newsElements.push(
				<News source={source} data={article} key={article.publishedAt} />
			);
		});

		return (
			<div>{newsElements}</div>
		)
	}
}

export default NewsList;
