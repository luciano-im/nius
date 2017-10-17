import React, { Component } from 'react';
import SourceSingle from './SourceSingle';

class Sources extends Component {

  render() {
    const onChange = this.props.onChange;

    let sourcesByCategory = {};
		this.props.sources.map(function(source, i) {
      if(!(source.category in sourcesByCategory)) {
        sourcesByCategory[source.category] = []
      }
			sourcesByCategory[source.category].push(source)
		});

    let sources = [];
    for (var k in sourcesByCategory) {
      if(k === this.props.category) {
        sources.push(<SourceSingle key={k} sources={sourcesByCategory[k]} category={k} media={this.props.media} onChange={onChange} />);
      }
    }

    return (
      <div className="sources">
        {sources}
      </div>
    )
  }

}

export default Sources;
