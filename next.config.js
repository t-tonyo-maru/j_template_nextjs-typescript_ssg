/** @type {import('next').NextConfig} */
const path = require('path')

// Nextjsの設定
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  webpack: (config) => {
    // scss / ts / tsx ファイルの @import '@/…' を /src/ に変換する
    config.resolve.alias['@'] = path.resolve(__dirname, './src')
    return config
  }
  // Image Optimization API 利用時に必要
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '**.hoge.com',
  //     }
  //   ]
  // }
}

module.exports = nextConfig
