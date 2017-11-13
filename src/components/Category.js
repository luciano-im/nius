import React, { Component } from 'react';

class Category extends Component {

	render() {
		let options = [];
		this.props.sources.map(function(opt, i) {
			options.push(<option key={i} value={opt}>{opt}</option>)
		});

		return (
			<select className="category-select custom-select form-control form-control-lg" value={this.props.value} onChange={this.props.onChange}>
				{options}
			</select>
		)
	}
}

export default Category;
