// react
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// components
import { Box } from '@/components/atoms/Box/Box'

// 正常系
describe('components/atoms/Box/Box: 正常系テスト', () => {
  it('Boxコンポーネントが描画されること', () => {
    const { container } = render(<Box>blank</Box>)
    expect(container.querySelector(`*[class*="box"]`)).not.toBeNull()
  })

  it('Boxコンポーネントにchildrenが渡されること', () => {
    const currentString = 'Box children'
    render(<Box>{currentString}</Box>)
    expect(screen.getByText(currentString)).toBeInTheDocument()
  })
})

// 異常系
// describe('components/atoms/Box/Box: 異常系テスト', () => {})
