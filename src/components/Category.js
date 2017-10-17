import React, { Component } from 'react';

class Category extends Component {

	// componentWillReceiveProps(props) {
	// 	const selected = this.props.value;
	// 	this.setState({
	// 		category: selected
	// 	});
	// }

	render() {
		let options = [];
		this.props.sources.map(function(opt, i) {
			options.push(<option key={i} value={opt}>{opt}</option>)
		});

		return (
			<select className="category-select" value={this.props.value} onChange={this.props.onChange}>
				{options}
			</select>
		)
	}
}

export default Category;
