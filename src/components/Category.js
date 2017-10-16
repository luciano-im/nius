import React, { Component } from 'react';

class Category extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		alert('Category is: ' + this.state.category);
		event.preventDefault();
	}

	handleChange(event) {
		this.setState({
			'category': event.target.value
		});
		event.preventDefault();
	}

	render() {
		let options = [];
		this.props.sources.map(function(opt, i) {
			options.push(<option key={i} value={opt}>{opt}</option>)
		});

		return (
			<form onSubmit={this.handleSubmit}>
				<select value={this.props.category} onChange={this.handleChange}>
					{options}
				</select>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default Category;
