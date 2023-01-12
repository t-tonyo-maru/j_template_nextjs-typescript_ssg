// react
import React from 'react'
import { render } from '@testing-library/react'
// components
import { TwoColumn } from '@/components/templates/TwoColumn/TwoColumn'

// 正常系
describe('components/templates/TwoColumn/TwoColumn: 正常系テスト', () => {
  it('TwoColumn テストコード - サンプル', () => {
    const { container } = render(
      <TwoColumn sub={<div>sub content</div>}>
        <div>main content</div>
      </TwoColumn>
    )
    expect(container.querySelector(`div[class*="twoColumn"]`)).not.toBeNull()
  })
})

// 異常系
// describe('components/templates/TwoColumn/TwoColumn: 異常系テスト', () => {})
