import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends([
    'next/core-web-vitals',
    './eslint-config/base.js',
    './eslint-config/react.js',
    './eslint-config/prettier.js',
  ]),
  {
    rules: {
      quotes: ['error', 'double'],
      semi: ['error', 'always'],
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
