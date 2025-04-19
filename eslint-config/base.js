const baseConfig = {
  rules: {
    'no-console': 'warn', // Cảnh báo khi sử dụng console.log
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Cảnh báo về biến không sử dụng
    'no-useless-escape': 'off', // Tắt cảnh báo về escape trong regex
    quotes: ['warn', 'single', { avoidEscape: true }], // Dùng dấu nháy đơn
    semi: ['warn', 'always'], // Luôn luôn có dấu ;
    'comma-dangle': ['warn', 'only-multiline'], // Thêm dấu phẩy sau phần tử cuối cùng của array hoặc object khi có nhiều dòng
  },
};

export default baseConfig;
