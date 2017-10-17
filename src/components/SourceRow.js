import React, { Component } from 'react';

class SourceRow extends Component {

  render() {
    const sourceName = this.props.sourceName;

    return (
      <label>
        <input type="checkbox" />
        {sourceName}
      </label>
    )
  }

}

export default SourceRow;
