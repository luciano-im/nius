import React, { Component } from 'react';

class SourceCategoryRow extends Component {

  render() {
    const category = this.props.category;

    return (
      <h3>{category}</h3>
    )
  }

}

export default SourceCategoryRow;
