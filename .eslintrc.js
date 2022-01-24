module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'react-app',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      es6: true,
      node: true,
      js: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    strict: 0,
    curly: ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-case-declarations': 'warn',
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'off',
    'prefer-template': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'prettier/prettier': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
