import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'mobx-react';
import App from './components/App/index.jsx';
import TitlesStore from './stores/titles';

const titlesStore = TitlesStore.create({
  titles: [],
  inputValue: '',
});

const root = (
  <Provider titlesStore={titlesStore}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
