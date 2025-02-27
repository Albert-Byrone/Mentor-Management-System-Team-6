module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: [
      'error',
      2,
      {
        ArrayExpression: 'off',
        ObjectExpression: 'off',
        MemberExpression: 'off',
        SwitchCase: 1,
      },
    ],
    'comma-spacing': ['error', {
 before: false, after: true,
    }],
    'linebreak-style': ['error', 'unix'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
  },
};
