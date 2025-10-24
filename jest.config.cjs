/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    // Transform .dat files to a module that exports the raw content
    '\.dat$': './jest-raw-loader.js',
  },
  moduleNameMapper: {
    // Ensure that imports for .dat files are correctly mapped
    '^(.*)\.dat\?raw$': '$1.dat',
  },
};
