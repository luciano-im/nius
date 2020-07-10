import React, { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import Category from './components/Category';
import Sources from './components/Sources';

function App() {
  // Sources retrieved by fetch
  const [sources, setSources] = useState([]);
  // Selected category
  const [category, setCategory] = useState('technology');
  // Selected sources
  const [media, setMedia] = useState([]);
  // Error in fetch
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchSources();
  }, []);

  const fetchSources = () => {
    const URL = 'https://newsapi.org/v1/sources?language=en';
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'ok') {
          setSources(data.sources);
        } else {
          setError(true);
        }
      })
      .catch((e) => {
        setError(true);
      });
  };

  const categories = (sources) => {
    let category = sources
      .map((item) => {
        // Return an array with category attribute only
        return item.category;
      })
      .filter((item, index, array) => {
        // Find the index of the actual element in the array using indexOf, if both indexes are different it's a repeated element
        return index === array.indexOf(item);
      });
    return category;
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setMedia([]);
  };

  const handleSourceChange = (event) => {
    // Get selected media
    let clickedMedia = event.target.value;
    if (event.target.checked === true) {
      // Add new media
      setMedia([...media, clickedMedia]);
    } else {
      // Delete media using filter
      setMedia(media.filter((item) => item !== clickedMedia));
    }
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
        {error && <p className="error">Request failed</p>}
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
