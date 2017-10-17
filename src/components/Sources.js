import React, { Component } from 'react';
import SourceSingle from './SourceSingle';

class Sources extends Component {

  render() {
    let sourcesByCategory = {};
		this.props.sources.map(function(source, i) {
      if(!(source.category in sourcesByCategory)) {
        sourcesByCategory[source.category] = []
      }
			sourcesByCategory[source.category].push(source.name)
		});

    let sources = [];
    for (var k in sourcesByCategory) {
      sources.push(<SourceSingle key={k} sources={sourcesByCategory[k]} category={k} />);
    }

    return (
      <div className="sources">
        {sources}
      </div>
    )
  }

}

export default Sources;
