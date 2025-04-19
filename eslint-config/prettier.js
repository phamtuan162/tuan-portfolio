const prettierConfig = {
  extends: ['prettier'], // Sử dụng cấu hình Prettier để tắt các rule ESLint xung đột với Prettier
  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: true,
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'es5',
        arrowParens: 'avoid',
      },
    ],
  },
};

export default prettierConfig;
