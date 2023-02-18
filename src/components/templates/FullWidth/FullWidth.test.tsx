// lib
import React from 'react'
import { render } from '@testing-library/react'
// components
import { FullWidth } from '@/components/templates/FullWidth/FullWidth'

// 正常系
describe('components/templates/FullWidth/FullWidth: 正常系テスト', () => {
  it('FullWidth テストコード - サンプル', () => {
    const { container } = render(
      <FullWidth>
        <div>content</div>
      </FullWidth>
    )
    expect(container.querySelector(`div[class*="fullWidth"]`)).not.toBeNull()
  })
})

// 異常系
// describe('components/templates/FullWidth/FullWidth: 異常系テスト', () => {})
