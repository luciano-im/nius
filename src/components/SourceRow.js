import React, { Component } from 'react';

class SourceRow extends Component {

  render() {
    const sourceName = this.props.sourceName;
    const value = this.props.value;
    const checked = this.props.checked;

    return (
      <label className="custom-control custom-checkbox">
        <input className="custom-control-input" type="checkbox" value={value} checked={checked} onChange={this.props.onChange} />
        <span class="custom-control-indicator"></span>
        {sourceName}
      </label>
    )
  }

}

export default SourceRow;
