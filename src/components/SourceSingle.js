import React, { Component } from 'react';
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
        <li key={i} className="sources-item form-check">
          <SourceRow value={source.id} sourceName={source.name} checked={checked} onChange={onChange} />
        </li>
      );
      //form-check-inline
    });

    return (
      <ul className={`sources-list ${category}`}>
        {rows}
      </ul>
    )
    //<SourceCategoryRow key={category} category={category} />
  }

}

export default SourceSingle;
