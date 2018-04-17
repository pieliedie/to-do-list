import React from 'react';
import ReactDOM from 'react-dom';
import './reset.min.css';
import './style.css';
import './index.js';
import {App} from './todo/main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
