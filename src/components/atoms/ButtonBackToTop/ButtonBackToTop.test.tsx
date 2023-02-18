// lib
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// components
import { ButtonBackToTop } from '@/components/atoms/ButtonBackToTop/ButtonBackToTop'

// 正常系
describe('components/atoms/ButtonBackToTop/ButtonBackToTop: 正常系テスト', () => {
  it('ButtonBackToTop テストコード - サンプル', () => {
    const { container } = render(<ButtonBackToTop />)
    expect(
      container.querySelector(`button[class*="button"]`)
    ).toBeInTheDocument()
  })
})

// 異常系
// describe('components/atoms/ButtonBackToTop/ButtonBackToTop: 異常系テスト', () => {})
