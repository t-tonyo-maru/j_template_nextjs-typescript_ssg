// react
import React from 'react'
import { render } from '@testing-library/react'
// components
import { OneColumn } from '@/components/templates/OneColumn/OneColumn'

// 正常系
describe('components/templates/OneColumn/OneColumn: 正常系テスト', () => {
  it('OneColumn テストコード - サンプル', () => {
    const { container } = render(
      <OneColumn>
        <div>content</div>
      </OneColumn>
    )
    expect(container.querySelector(`div[class*="oneColumn"]`)).not.toBeNull()
  })
})

// 異常系
// describe('components/templates/OneColumn/OneColumn: 異常系テスト', () => {})
