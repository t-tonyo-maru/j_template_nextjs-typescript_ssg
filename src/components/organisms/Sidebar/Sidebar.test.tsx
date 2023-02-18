// lib
import React from 'react'
import { render } from '@testing-library/react'
// components
import { Sidebar } from '@/components/organisms/Sidebar/Sidebar'

// 正常系
describe('components/organisms/Sidebar/Sidebar: 正常系テスト', () => {
  it('Sidebar テストコード - サンプル', () => {
    const { container } = render(
      <Sidebar>
        (<div>content</div>)
      </Sidebar>
    )
    expect(container.querySelector(`div[class*="sidebar"]`)).not.toBeNull()
  })
})

// 異常系
// describe('components/organisms/Sidebar/Sidebar: 異常系テスト', () => {})
