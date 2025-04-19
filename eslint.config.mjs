import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends([
    'next/core-web-vitals',
    './eslint-config/base.js', // Đảm bảo các file cấu hình ESLint khác có định dạng chính xác
    './eslint-config/react.js',
    './eslint-config/prettier.js',
  ]),
  {
    rules: {
      quotes: ['error', 'double'],
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-useless-escape': 'off',
      semi: ['warn', 'always'],
      'comma-dangle': ['warn', 'only-multiline'],
    },
  },
];

export default eslintConfig;
