import React, { useState, useEffect } from 'react';
import News from './News';

function NewsList(props) {
  const API_KEY = '62a5f2039f7e4057acc89f4c1fbf17dd';
  const [news, setNews] = useState([]);
  const { media, category } = props;

  useEffect(() => {
    fetchNews(media);
  }, [news]);

  const fetchNews = (media) => {
    const URL =
      'https://newsapi.org/v1/articles?apiKey=' + API_KEY + '&source=';
    // sortBy=top
    media.map((mediaSource, i) => {
      fetch(URL + mediaSource)
        .then((res) => res.json())
        .then((data) => setNews(this.state.news.concat(data)));
    });
  };

  return (
    <div className="news-list">
      {news.map((source) => {
        return (
          <>
            <h2 className="news-source" key={source.source}>
              {source.source}
            </h2>
            <div className="card-columns">
              {source.articles.map((article) => (
                <News
                  key={article.publishedAt}
                  category={category}
                  data={article}
                />
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default NewsList;
