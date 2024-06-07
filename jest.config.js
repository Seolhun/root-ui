module.exports = {
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.(test|spec).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setUpTest.ts']
}
