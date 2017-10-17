import React, { Component } from 'react';
import SourceCategoryRow from './SourceCategoryRow';
import SourceRow from './SourceRow';

class SourceSingle extends Component {

  render() {
    const sources = this.props.sources;
    const category = this.props.category;
    const media = this.props.media;
    const onChange = this.props.onChange;
    let rows = [];

    sources.map((source, i) => {
      let checked = media.includes(source.id)
      rows.push(
        <li key={i} className="sources-item">
          <SourceRow value={source.id} sourceName={source.name} checked={checked} onChange={onChange} />
        </li>
      );
    });

    return (
      <ul className={`sources-list ${category}`}>
        <SourceCategoryRow key={category} category={category} />
        {rows}
      </ul>
    )
  }

}

export default SourceSingle;
