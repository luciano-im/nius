import React from 'react';
import SourceSingle from './SourceSingle';

function Sources(props) {
  const { onChange, sources, media, category } = props;

  let sourcesByCategory = {};
  sources.map((source, i) => {
    if (!(source.category in sourcesByCategory)) {
      sourcesByCategory[source.category] = [];
    }
    sourcesByCategory[source.category].push(source);
  });

  let sourcesObj = [];
  for (var k in sourcesByCategory) {
    if (k === category) {
      sourcesObj.push(
        <SourceSingle
          key={k}
          sources={sourcesByCategory[k]}
          category={k}
          media={media}
          onChange={onChange}
        />
      );
    }
  }

  return <div className="sources">{sourcesObj}</div>;
}

export default Sources;
