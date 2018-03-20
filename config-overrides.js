const { injectBabelPlugin } = require('react-app-rewired');
const rewireEslint = require('react-app-rewire-eslint');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }], config);

  config = injectBabelPlugin(['lodash', { id: ['lodash', 'recompose'] }], config);

  config = rewireEslint(config, env);

  return config;
};
