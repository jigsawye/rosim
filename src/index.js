/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Raven from 'raven-js';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRavenMiddleware from 'raven-for-redux';

import reducer from './reducers';
import App from './components/App';
import loadDataFromUrl from './utils/loadDataFromUrl';

Raven.config(process.env.REACT_APP_SENTRY_DSN).install();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(createRavenMiddleware(Raven)))
);

loadDataFromUrl(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
