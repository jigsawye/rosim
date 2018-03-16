require('dotenv').config();
const { injectBabelPlugin } = require('react-app-rewired');
const rewireDefinePlugin = require('react-app-rewire-define-plugin');
const rewireEslint = require('react-app-rewire-eslint');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }], config);

  config = injectBabelPlugin(['lodash', { id: ['lodash', 'recompose'] }], config);

  config = rewireDefinePlugin(config, env, {
    'process.env.SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN),
    'process.env.version': JSON.stringify(require('./package.json').version),
  });

  config = rewireEslint(config, env);

  return config;
};
