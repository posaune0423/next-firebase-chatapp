module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    requireConfigFile: false,
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx']
    }
  ],
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
