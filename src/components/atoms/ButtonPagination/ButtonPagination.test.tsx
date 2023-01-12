// react
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// components
import { ButtonPagination } from '@/components/atoms/ButtonPagination/ButtonPagination'

// 正常系
describe('components/atoms/ButtonPagination/ButtonPagination: 正常系テスト', () => {
  it('ButtonPagination テストコード - サンプル', () => {
    const testChildren = 1
    render(<ButtonPagination>{testChildren}</ButtonPagination>)
    expect(screen.getByText(testChildren)).toBeInTheDocument()
  })
})

// 異常系
// describe('components/atoms/ButtonPagination/ButtonPagination: 異常系テスト', () => {})
