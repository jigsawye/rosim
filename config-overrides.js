const { addBabelPlugins, override, useEslintRc } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
    ['lodash', { id: ['lodash'] }]
  ),
  useEslintRc()
);
