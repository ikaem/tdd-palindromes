// eslintrc.js

module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    node: true,
  },
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "comma-dangle": ["error", "always-multiline"],
  },
};
