import React, { Component } from 'react';


class News extends Component {
	render() {
		const data = this.props.data;

		return (
			<div>
				<hr></hr>
				<p>{data.publishedAt}</p>
				<p>{data.author}</p>
				<p>{data.title}</p>
				<p>{data.description}</p>
				<a href={data.url}>Link</a>
			</div>
		)

		// <img src={data.urlToImage} alt={data.title} />
	}
}

export default News;
