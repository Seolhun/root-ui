module.exports = {
  extends: ['@seolhun/root-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'perfectionist/sort-enums': 'off',
  },
};
