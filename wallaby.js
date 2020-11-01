// wallaby.js

module.exports = () => {
  return {
    testFramework: "jest",
    env: {
      type: "node",
    },
    tests: ["tests/**/*.test.js"],
    files: ["**/*.js", "!node_modules/**/*", "!**/*.test.js", "!**/.*"],
  };
};
