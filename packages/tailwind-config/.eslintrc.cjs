module.exports = {
  extends: ['@seolhun/eslint-config'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'perfectionist/sort-enums': 'off',
  },
};
