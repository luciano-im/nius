import React from 'react';
import SourceRow from './SourceRow';

function Sources(props) {
  const { onChange, sources, media, category } = props;

  // Filter sources by selected category
  let categorySources = sources.filter((item) => {
    return item.category === category;
  });

  return (
    <div className="sources">
      <ul className={`sources-list ${category}`}>
        {categorySources.map((source) => (
          <li key={source.id} className="sources-item form-check">
            <SourceRow
              value={source.id}
              sourceName={source.name}
              checked={media.includes(source.id)}
              onChange={onChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sources;
