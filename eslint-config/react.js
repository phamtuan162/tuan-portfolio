const reactConfig = {
  rules: {
    'react/react-in-jsx-scope': 'off', // Next.js không yêu cầu import React
    'react/jsx-uses-react': 'off', // Next.js không cần import React
    'react/no-unescaped-entities': 'off', // Cho phép sử dụng " và ' trong JSX
  },
};

export default reactConfig;
