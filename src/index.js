import Raven from 'raven-js';
import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

Raven.config(process.env.REACT_APP_SENTRY_DSN).install();

render(<App />, document.getElementById('root'));
