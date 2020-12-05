module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-await-in-loop': ['error'],
    'no-multi-spaces': ['error'],
    'no-compare-neg-zero': ['error'],

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  globals: {
    fetch: false,
  },
};
