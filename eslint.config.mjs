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
    './eslint-config/base.js', // Nhúng cấu hình base
    './eslint-config/react.js', // Nhúng cấu hình cho React
    './eslint-config/prettier.js', // Nhúng cấu hình Prettier
  ]),
];

export default eslintConfig;
