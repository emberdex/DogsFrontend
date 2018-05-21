import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ImageView from './ImageView';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ImageView />, document.getElementById('root'));
registerServiceWorker();
