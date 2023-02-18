// lib
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// components
import {
  Breadcrumb,
  BreadcrumbItemType
} from '@/components/molecules/Breadcrumb/Breadcrumb'

// 正常系
describe('components/molecules/Breadcrumb/Breadcrumb: 正常系テスト', () => {
  it('Breadcrumb テストコード - サンプル', () => {
    // テスト用パンくず
    const testBreadcrumbLink: BreadcrumbItemType[] = [
      {
        id: 0,
        name: 'home',
        url: '/'
      },
      {
        id: 1,
        name: 'posts',
        url: '/posts'
      }
    ]

    const { container } = render(<Breadcrumb links={testBreadcrumbLink} />)
    expect(container.querySelector(`ul > li`)!.textContent).toContain('home')
  })
})

// 異常系
// describe('components/molecules/Breadcrumb/Breadcrumb: 異常系テスト', () => {})
