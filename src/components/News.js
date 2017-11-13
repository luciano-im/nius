import React, { Component } from 'react';


class News extends Component {
	render() {
		const data = this.props.data;
		let publishedDate = (data.publishedAt) ? data.publishedAt.substring(0,10) : "Not available";
		let author = (data.author) ? data.author : "Not available";

		return (
			<div className="card">
				<img className="card-img-top" src={data.urlToImage} alt={data.title} />
				<div className="card-body">
					<div className="date">
						<small className="text-muted date"><span><i className="fa fa-clock-o" aria-hidden="true"></i> {publishedDate}</span></small>
					</div>
					<h4 className="card-title">{data.title}</h4>
					<p className="card-text">{data.description}</p>
					<div className="add-info">
						<small className="text-muted"><span><i className="fa fa-user-o" aria-hidden="true"></i> {author}</span></small>
					</div>
					<a className="btn btn-primary" href={data.url}><i className="fa fa-link" aria-hidden="true"></i></a>
				</div>
			</div>
		)
	}
}

export default News;
