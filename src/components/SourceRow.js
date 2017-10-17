import React, { Component } from 'react';

class SourceRow extends Component {

  render() {
    const sourceName = this.props.sourceName;
    const value = this.props.value;
    const checked = this.props.checked;

    return (
      <label>
        <input type="checkbox" value={value} checked={checked} onChange={this.props.onChange} />
        {sourceName}
      </label>
    )
  }

}

export default SourceRow;
