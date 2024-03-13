/* eslint-disable */
export default {
  displayName: 'server-feature-health',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/server/feature-health',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
};
