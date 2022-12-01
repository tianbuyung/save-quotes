module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'object-curly-newline': 0,
    'jsx-a11y/label-has-associated-control': [2, { assert: 'either' }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
  },
};
