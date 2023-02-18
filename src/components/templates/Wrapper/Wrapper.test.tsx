// lib
import React from 'react'
import { render } from '@testing-library/react'
// components
import Layout from '@/components/templates/Wrapper/Wrapper'

// 正常系
describe('components/templates/Wrapper/Wrapper: 正常系テスト', () => {
  it('Wrapper テストコード - サンプル', () => {
    const { container } = render(
      <Layout>
        <div>content</div>
      </Layout>
    )
    expect(container.querySelector(`div[class*="wrapper"]`)).not.toBeNull()
  })
})

// 異常系
// describe('components/templates/Wrapper/Wrapper: 異常系テスト', () => {})
