import React from 'react';

function SourceRow(props) {
  const { sourceName, value, checked, onChange } = props;

  return (
    <label className="custom-control custom-checkbox">
      <input
        className="custom-control-input"
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="custom-control-indicator"></span>
      {sourceName}
    </label>
  );
}

export default SourceRow;
