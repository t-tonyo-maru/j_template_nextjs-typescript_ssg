// lib
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// components
import { Heading } from '@/components/atoms/Heading/Heading'

// 正常系
describe('components/atoms/Heading/Heading: 正常系テスト', () => {
  it('Heading テストコード - サンプル', () => {
    const { container } = render(<Heading level={1}>{'heading 1'}</Heading>)
    expect(container.querySelector('h1')).toBeInTheDocument()
  })
})

// 異常系
// describe('components/atoms/Heading/Heading: 異常系テスト', () => {})
