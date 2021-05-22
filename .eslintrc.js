module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': ['off'],
    'import/no-named-as-default': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'consistent-return': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': ['error', 'prefer-double'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['@app', './src/_app']],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  globals: {
    fetch: false,
    window: true,
    document: true,
  },
};
