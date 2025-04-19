module.exports = {
    extends: [
        "next/core-web-vitals", // Chuẩn của Next.js
        "prettier", // Tương thích với Prettier
    ],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        "prefer-arrow-callback": ["error"],
        "prefer-template": ["error"],
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/quote": "off", // Nếu không dùng TypeScript có thể xóa dòng này
        "no-useless-escape": "off",
    },
};
