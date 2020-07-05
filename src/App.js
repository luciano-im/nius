import React, { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import Category from './components/Category';
import Sources from './components/Sources';

function App() {
  const [sources, setSources] = useState([]);
  const [category, setCategory] = useState('technology');
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetchSources();
  }, []);

  const fetchSources = () => {
    const URL = 'https://newsapi.org/v1/sources?language=en';
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // update state with API data
        setSources(data.sources);
      });
  };

  const categories = (sources) => {
    let lookup = {};
    let category = [];
    sources.forEach((source) => {
      if (!(source.category in lookup)) {
        lookup[source.category] = true;
        category.push(source.category);
      }
    });
    return category;
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setMedia([]);
  };

  const handleSourceChange = (event) => {
    //con slice() hago una copia del array en currentMedia en vez de una referencia
    //si hiciera una referencia, dentro de NewsList tanto this.props como prevProps son iguales
    //ya que se trata del mismo array, y no es posible comparar el estado actual con el previo.
    let currentMedia = media.slice();
    let newMedia = event.target.value;

    if (event.target.checked === true) {
      currentMedia.push(newMedia);
    } else {
      let index = currentMedia.indexOf(newMedia);
      if (index > -1) {
        currentMedia.splice(index, 1);
      }
    }

    setMedia(currentMedia);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-info">
          <span className="app-developed">
            Designed & developed by{' '}
            <a href="http://www.luciano.im/">Luciano Muñoz</a>
          </span>
          <span className="app-code">
            <a href="https://github.com/luchisds/nius">
              <i className="fa fa-github" aria-hidden="true"></i> View Code
            </a>
          </span>
        </div>
        <h1 className="app-title">
          <i className="fa fa-newspaper-o" aria-hidden="true"></i> Nius
        </h1>
        <span className="app-powered">
          Powered by <a href="https://newsapi.org/">News API</a>
        </span>
        <Category
          sources={categories(sources)}
          value={category}
          onChange={handleCategoryChange}
        />
      </header>
      <Sources
        sources={sources}
        category={category}
        media={media}
        onChange={handleSourceChange}
      />
      <NewsList category={category} media={media} />
    </div>
  );
}

export default App;
