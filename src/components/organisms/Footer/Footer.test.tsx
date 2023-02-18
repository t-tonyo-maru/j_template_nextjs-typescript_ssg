// lib
import React from 'react'
import { render } from '@testing-library/react'
// components
import { Footer } from '@/components/organisms/Footer/Footer'

// 正常系
describe('components/organisms/Footer/Footer: 正常系テスト', () => {
  it('Footer テストコード - サンプル', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('footer')).not.toBeNull()
  })
})

// 異常系
// describe('components/organisms/Footer/Footer: 異常系テスト', () => {})
