// lib
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// components
import { Tabs, TabsPropsType } from '@/components/molecules/Tabs/Tabs'

// 正常系
describe('components/molecules/Tabs/Tabs: 正常系テスト', () => {
  it('Tabs テストコード - サンプル', () => {
    const paginationProps: TabsPropsType = {
      current: 1,
      tabs: [
        {
          id: 1,
          name: 'first'
        },
        {
          id: 2,
          name: 'second'
        }
      ],
      handleClick: (id: number) => {
        console.log(id)
      }
    }
    const { container } = render(<Tabs {...paginationProps} />)
    expect(container.querySelector(`ul > li`)).toBeInTheDocument()
  })
})

// 異常系
// describe('components/molecules/Tabs/Tabs: 異常系テスト', () => {})
