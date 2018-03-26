import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import sitemap from './sitemap';

ReactDOM.render(<App sitemap={sitemap} />, document.getElementById('root'));
registerServiceWorker();
