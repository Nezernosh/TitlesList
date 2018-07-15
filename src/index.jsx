import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'mobx-react';
import App from './components/App/index.jsx';
import TitlesStore from './stores/titles';

const root = (
  <Provider titlesStore={TitlesStore}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
