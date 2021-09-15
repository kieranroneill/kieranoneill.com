module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.d.ts',
  ],
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
      tsconfig: 'tsconfig.test.json',
    },
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/mocks/fileMock.js',
    '\\.(css)$': '<rootDir>/test/mocks/stylesMock.js',
  },
  rootDir: '.',
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/?(*.)(test).(j|t)s?(x)'],
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
  },
  verbose: true,
};
