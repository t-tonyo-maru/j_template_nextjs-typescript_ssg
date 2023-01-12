// react
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// components
import { Overlay } from '@/components/atoms/Overlay/Overlay'

// 正常系
describe('components/atoms/Overlay/Overlay: 正常系テスト', () => {
  it('Overlay テストコード - サンプル', () => {
    const { container } = render(<Overlay />)
    expect(container.querySelector(`div[class*="overlay"]`)).toBeInTheDocument()
  })
})

// 異常系
// describe('components/atoms/Overlay/Overlay: 異常系テスト', () => {})
