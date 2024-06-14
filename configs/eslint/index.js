module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:perfectionist/recommended-alphabetical'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin',
    'perfectionist',
  ],
  root: true,
  rules: {
    // Custom
    'max-len': 0,
    'no-unused-vars': 0,
    'no-var-requires': 0,
    'perfectionist/sort-classes': [
      'error',
      {
        'groups': [
          'static-property',
          'private-property',
          'property',
          'constructor',
          'static-method',
          'private-method',
          'method'
        ],
        'order': 'asc',
        'type': 'natural'
      }
    ],
    'perfectionist/sort-enums': [
      'error',
      {
        'order': 'asc',
        'type': 'natural',
      }
    ],
    'perfectionist/sort-exports': [
      'error',
      {
        'order': 'asc',
        'type': 'natural',
      },
    ],
    /**
     * @see https://eslint-plugin-perfectionist.azat.io/rules/
     */
    'perfectionist/sort-imports': [
      'error',
      {
        'custom-groups': {
          'value': {
            'seolhun': '@seolhun/**'
          },
        },
        'groups': [
          'side-effect',
          'type',
          ['builtin', 'external', 'seolhun'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'style',
          'object',
          'unknown'
        ],
        'internal-pattern': [
          '~/**',
        ],
        'newlines-between': 'always',
        'order': 'asc',
        'read-tsconfig': false,
        'type': 'natural'
      }
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        'always-on-top': ['id', '_id'],
        'order': 'asc',
        'partition-by-comment': 'Part:**',
        'type': 'natural'
      }
    ]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx']
    },
  }
}
