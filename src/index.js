import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'whatwg-fetch';
import Promise from 'promise-polyfill'; 
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Add Promise polyfill to window
if (!window.Promise) {
  window.Promise = Promise;
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
