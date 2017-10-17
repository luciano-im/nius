import React, { Component } from 'react';
import SourceCategoryRow from './SourceCategoryRow';
import SourceRow from './SourceRow';

class SourceSingle extends Component {

  render() {
    const sources = this.props.sources;
    const category = this.props.category;
    let rows = [];

    sources.map((source, i) => {
      rows.push(
        <li key={i} className="sources-item">
          <SourceRow sourceName={source} />
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
