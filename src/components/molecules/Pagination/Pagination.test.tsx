// react
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// components
import {
  Pagination,
  PaginationPropsType
} from '@/components/molecules/Pagination/Pagination'

// 正常系
describe('components/molecules/Pagination/Pagination: 正常系テスト', () => {
  it('Pagination テストコード - サンプル', () => {
    const paginationProps: PaginationPropsType = {
      listPageUrl: '',
      currentPage: 1,
      maxCountLinkPerPage: 10,
      totalCount: 100
    }
    const { container } = render(<Pagination {...paginationProps} />)
    expect(container.querySelector(`ul > li`)).toBeInTheDocument()
  })
})

// 異常系
// describe('components/molecules/Pagination/Pagination: 異常系テスト', () => {})
