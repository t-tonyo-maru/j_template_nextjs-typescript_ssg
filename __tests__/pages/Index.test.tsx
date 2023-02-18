// lib
import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import '@testing-library/jest-dom/extend-expect'
// pages
import IndexPage from '@/pages/index'

// 正常系
describe('/index ページ: 描画系 | 正常系テスト', () => {
  it('/index ページを表示した時に、ページ内に「Hello Next.js 👋」も文字列があること', () => {
    render(
      <RecoilRoot>
        <IndexPage />
      </RecoilRoot>
    )
    expect(screen.getByText('Hello Next.js 👋')).toBeInTheDocument()
  })
})

// 異常系
// describe('/index ページ: 異常系テスト', () => {})
