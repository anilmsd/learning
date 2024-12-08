export const verbose = true;
export const testEnvironment = "jsdom";
export const setupFilesAfterEnv = ["<rootDir>/jest.setup.js"];
export const roots = ["<rootDir>/src"];
export const transform = {
  "^.+\\.jsx?$": "babel-jest",
};
export const moduleNameMapper = {
  "^@/(.*)$": "<rootDir>/src/$1",
};
export const moduleFileExtensions = ["js", "jsx", "ts", "json", "node"];
export const globals = {
  "process.env.NODE_ENV": "test",
};
export const transformIgnorePatterns = [
  "node_modules/(?!(axios|other-module-to-include)/)",
];

// export const testEnvironment = 'jsdom';
// export const verbose = true;
