import Raven from 'raven-js';
import React from 'react';
import createRavenMiddleware from 'raven-for-redux';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { render } from 'react-dom';

import App from './components/App';
import loadDataFromUrl from './utils/loadDataFromUrl';
import reducer from './reducers';

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
