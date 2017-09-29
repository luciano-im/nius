import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {'category':'technology'};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		alert('Category is: ' + this.state.category);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<select value={this.state.category}>
					this.props.categories.forEach((categories) => {
						<option value={categories}>{categories}</option>
					};
				</select>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default Search;