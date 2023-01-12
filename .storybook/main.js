const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config) => {
    // scss / ts / tsx ファイルの @import '@/…' を /src/ に変換する
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/')
    // background-image などに入れる画像のパスを補完する
    config.resolve.alias['/assets/image'] = path.resolve(
      __dirname,
      '../public/assets/image/'
    )
    return { ...config }
  }
}
