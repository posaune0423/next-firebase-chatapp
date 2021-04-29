module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'semi': ['error', 'never'],
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
  },
}
