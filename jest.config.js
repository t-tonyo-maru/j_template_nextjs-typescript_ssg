const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリをセット。
  dir: './'
})

const customJestConfig = {
  // jest.setup.jsを作成する場合のみ定義。
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // 以降、jestの設定を記述する
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/.storybook/',
    '<rootDir>/.out/',
    '<rootDir>/node_modules/'
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/store/(.*)$': '<rootDir>/src/store/$1',
    '^@/assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules'
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'tsx', 'ts', 'd.ts']
}

// createJestConfigを定義することによって、本ファイルで定義された設定がNext.jsの設定に反映されます
module.exports = createJestConfig(customJestConfig)
