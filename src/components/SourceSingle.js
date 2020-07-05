import React from 'react';
import SourceRow from './SourceRow';

function SourceSingle(props) {
  const { sources, category, media, onChange } = props;
  let rows = [];

  sources.map((source, i) => {
    let checked = media.includes(source.id);
    rows.push(
      <li key={i} className="sources-item form-check">
        <SourceRow
          value={source.id}
          sourceName={source.name}
          checked={checked}
          onChange={onChange}
        />
      </li>
    );
  });

  return <ul className={`sources-list ${category}`}>{rows}</ul>;
}

export default SourceSingle;
