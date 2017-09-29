import React, { Component } from 'react';


class News extends Component {
	render() {
		const data = this.props.data;

		return (
			<div>
				<p>{data.publishedAt}</p>
				<p>{data.author}</p>
				<p>{data.title}</p>
				<p>{data.description}</p>
				<img src={data.urlToImage} alt={data.title} />
				<a href={data.url}>Link</a>
			</div>
		)		
	}
}

export default News;