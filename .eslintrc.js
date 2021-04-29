module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },
  plugins: ['@babel'],
  extends: ['prettier'],
  rules: {
    semi: ['error', 'never'],
    'arrow-parens': 'off',
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'prefer-promise-reject-errors': 'off',
    'require-await': 'off',
    'space-before-function-paren': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/require-default-props': 'off'
  }
}
