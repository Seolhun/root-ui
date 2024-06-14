module.exports = {
  extends: ['@seolhun/eslint-config'],
  rules: {
    'perfectionist/sort-enums': 'off',
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
}
