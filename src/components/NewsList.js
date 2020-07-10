import React, { useState, useEffect } from 'react';
import News from './News';

function NewsList(props) {
  // const API_KEY = '62a5f2039f7e4057acc89f4c1fbf17dd';
  const [news, setNews] = useState([]);
  const { media, category } = props;

  useEffect(() => {
    fetchNews(media);
  }, [media]);

  const fetchNews = (media) => {
    // Get current sources
    let currentMedia = news.map((item) => item.source);
    // If media > currentMedia there is a new source
    // Else a source was deleted
    if (media.length > currentMedia.length) {
      const URL =
        'https://newsapi.org/v1/articles?apiKey=' +
        process.env.REACT_APP_API_KEY +
        '&source=';
      // Check added source to fetch it
      media.map((source, i) => {
        // If source not in currentMedia fetch it
        if (currentMedia.indexOf(source) === -1) {
          fetch(URL + source)
            .then((res) => res.json())
            .then((data) => setNews(news.concat(data)));
        }
      });
    } else {
      // Check unchecked source to delete it
      currentMedia.map((source) => {
        // If source not in media delete it
        if (media.indexOf(source) === -1) {
          setNews(news.filter((item) => item.source !== source));
        }
      });
    }
  };

  return (
    <div className="news-list">
      {news.map((source) => {
        return (
          <React.Fragment key={source.source}>
            <h2 className="news-source" key={source.source}>
              {source.source}
            </h2>
            <div className="card-columns">
              {source.articles.map((article) => (
                <News key={article.title} category={category} data={article} />
              ))}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default NewsList;
