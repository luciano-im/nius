import React, { Component } from 'react';

class Sources extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    let sources = [];
    return (
      <p>{this.props.sources}</p>
    )
  }

}

export default Sources;
