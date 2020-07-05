import React from 'react';

function Category(props) {
  const { sources, value, onChange } = props;

  return (
    <select
      className="category-select custom-select form-control form-control-lg"
      value={value}
      onChange={onChange}
    >
      {sources.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default Category;
