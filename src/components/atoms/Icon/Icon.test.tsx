// lib
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// components
import { Icon } from '@/components/atoms/Icon/Icon'

// 正常系
describe('components/atoms/Icon/Icon: 正常系テスト | props size テスト', () => {
  it('props size md テスト', () => {
    const { container } = render(<Icon size='md' isInActive={false}></Icon>)
    expect(container.querySelector('.md')).toHaveClass('md')
  })
  it('props size sm テスト', () => {
    const { container } = render(<Icon size='sm' isInActive={false}></Icon>)
    expect(container.querySelector('.sm')).toHaveClass('sm')
  })
})

// 正常系
describe('components/atoms/Icon/Icon: 正常系テスト | props isInActive テスト', () => {
  it('props isInActive = true テスト', () => {
    const { container } = render(<Icon size='sm' isInActive={true}></Icon>)
    expect(container.querySelector('.inactive')).toHaveClass('inactive')
  })
  it('props isInActive = false テスト', () => {
    const { container } = render(<Icon size='sm' isInActive={false}></Icon>)
    expect(container.querySelector('.inactive')).not.toBeInTheDocument()
  })
})

// 異常系
// describe('components/atoms/Icon/Icon: 異常系テスト', () => {})
