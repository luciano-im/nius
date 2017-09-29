import React, { Component } from 'react';
import NewsList from './components/NewsList'
import Search from './components/Search'

const API_KEY = '62a5f2039f7e4057acc89f4c1fbf17dd';

const SOURCES = {"status":"ok",
                 "sources": [
                  {"id":"abc-news-au","name":"ABC News (AU)","description":"Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.","url":"http://www.abc.net.au/news","category":"general","language":"en","country":"au","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top"]},
                  {"id":"al-jazeera-english","name":"Al Jazeera English","description":"News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.","url":"http://www.aljazeera.com","category":"general","language":"en","country":"us","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top","latest"]},
                  {"id":"ars-technica","name":"Ars Technica","description":"The PC enthusiast's resource. Power users and the tools they love, without computing religion.","url":"http://arstechnica.com","category":"technology","language":"en","country":"us","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top","latest"]},
                  {"id":"associated-press","name":"Associated Press","description":"The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.","url":"https://apnews.com/","category":"general","language":"en","country":"us","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top"]},
                  {"id":"bbc-news","name":"BBC News","description":"Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.","url":"http://www.bbc.co.uk/news","category":"general","language":"en","country":"gb","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top"]},
                  {"id":"bbc-sport","name":"BBC Sport","description":"The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.","url":"http://www.bbc.co.uk/sport","category":"sport","language":"en","country":"gb","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top"]},
                  {"id":"bild","name":"Bild","description":"Die Seite 1 für aktuelle Nachrichten und Themen, Bilder und Videos aus den Bereichen News, Wirtschaft, Politik, Show, Sport, und Promis.","url":"http://www.bild.de","category":"general","language":"de","country":"de","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top","latest"]},
                  {"id":"bloomberg","name":"Bloomberg","description":"Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.","url":"http://www.bloomberg.com","category":"business","language":"en","country":"us","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top"]},
                  {"id":"breitbart-news","name":"Breitbart News","description":"Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.","url":"http://www.breitbart.com","category":"politics","language":"en","country":"us","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top","latest"]},
                  {"id":"business-insider","name":"Business Insider","description":"Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.","url":"http://www.businessinsider.com","category":"business","language":"en","country":"us","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top","latest"]},
                  {"id":"business-insider-uk","name":"Business Insider (UK)","description":"Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.","url":"http://uk.businessinsider.com","category":"business","language":"en","country":"gb","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top","latest"]},
                  {"id":"buzzfeed","name":"Buzzfeed","description":"BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.","url":"https://www.buzzfeed.com","category":"entertainment","language":"en","country":"us","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top","latest"]},{"id":"cnbc","name":"CNBC","description":"Get latest business news on stock markets, financial & earnings on CNBC. View world markets streaming charts & video; check stock tickers and quotes.","url":"http://www.cnbc.com","category":"business","language":"en","country":"us","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top"]},
                  {"id":"cnn","name":"CNN","description":"View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN","url":"http://us.cnn.com","category":"general","language":"en","country":"us","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top"]},
                  {"id":"daily-mail","name":"Daily Mail","description":"All the latest news, sport, showbiz, science and health stories from around the world from the Daily Mail and Mail on Sunday newspapers.","url":"http://www.dailymail.co.uk/home/index.html","category":"entertainment","language":"en","country":"gb","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["top","latest"]},
                  {"id":"der-tagesspiegel","name":"Der Tagesspiegel","description":"Nachrichten, News und neueste Meldungen aus dem Inland und dem Ausland - aktuell präsentiert von tagesspiegel.de.","url":"http://www.tagesspiegel.de","category":"general","language":"de","country":"de","urlsToLogos":{"small":"","medium":"","large":""},"sortBysAvailable":["latest"]}
                 ]
                };

const NEWS = {"status":"ok",
               "source":
               "techcrunch",
               "sortBy":"top",
               "articles":[
                  {"author":"Matthew Panzarino","title":"Apple would like to remind the FCC that it can’t activate imaginary FM radios that iPhones don’t have","description":"Apple responded today to FCC Commissioner Ajit Pai, who issued a statement that “urged” Apple to activate the FM chips that he claimed are in iPhones in..","url":"https://techcrunch.com/2017/09/28/whose-fcc-is-this/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/09/iphone_xray.jpg","publishedAt":"2017-09-29T02:24:34Z"},
                  {"author":"Josh Constine","title":"Google is building a smart screen competitor to Amazon’s Echo Show","description":"Multiple sources tell TechCrunch that Google is building a tabletop smart screen for video calling and more that will compete with Amazon's Echo Show. The..","url":"https://techcrunch.com/2017/09/28/google-homescreen/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/09/google-competitor-amazon-echo-show.jpg","publishedAt":"2017-09-28T23:58:09Z"},
                  {"author":"Ron Miller","title":"BlackBerry, yes BlackBerry, is making a comeback as a software company","description":"When you think about dead companies walking, BlackBerry was clearly one that came to mind, but under the leadership of CEO John Chen, the company is actually..","url":"https://techcrunch.com/2017/09/28/blackberry-yes-blackberry-is-making-a-comeback-as-a-software-company/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/09/gettyimages-503650224.jpg","publishedAt":"2017-09-28T19:39:41Z"},
                  {"author":"Jonathan Shieber","title":"Fidelity CEO Abigail Johnson says the company is mining cryptocurrencies","description":"Fidelity Investments, one of the world's largest investment firms with $2.3 trillion in managed assets, is taking a long look at cryptocurrencies.  The..","url":"https://techcrunch.com/2017/09/28/fidelity-ceo-abigail-johnson-says-the-company-is-mining-cryptocurrencies/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/09/gettyimages-143349700.jpg","publishedAt":"2017-09-28T17:35:09Z"}
               ]
             };


function categories(sources) {
  let lookup = {};
  let category = [];
  sources.forEach((source) => {
    if(!(source.category in lookup)) {
      lookup[source.category] = true
      category.push(source.category);
    }
  });

  return category
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Nius</h1>
        </header>
        //<Search categories={categories(SOURCES.sources)} />
        <NewsList news={NEWS} />
      </div>
    );
  }
}

export default App;
