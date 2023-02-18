// lib
import React from 'react'
import { render } from '@testing-library/react'
// components
import { Header } from '@/components/organisms/Header/Header'

// 正常系
describe('components/organisms/Header/Header: 正常系テスト', () => {
  it('Header テストコード - サンプル', () => {
    const { container } = render(<Header />)
    expect(container.querySelector('header')).not.toBeNull()
  })
})

// 異常系
// describe('components/organisms/Header/Header: 異常系テスト', () => {})
