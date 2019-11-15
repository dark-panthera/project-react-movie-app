import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import '@fortawesome/fontawesome-free/css/all.css';
//import './grid.scss';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
