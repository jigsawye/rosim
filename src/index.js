import React from 'react';
import { init } from '@sentry/browser';
import { render } from 'react-dom';

import App from './components/App';

init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
});

render(<App />, document.getElementById('root'));
