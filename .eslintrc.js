module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true
  },
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }]
  }
};
