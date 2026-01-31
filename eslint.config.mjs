import nextConfig from "eslint-config-next/core-web-vitals";

const config = [
  ...nextConfig,
  {
    rules: {
      "react/no-unescaped-entities": 0,
    },
  },
];

export default config;
