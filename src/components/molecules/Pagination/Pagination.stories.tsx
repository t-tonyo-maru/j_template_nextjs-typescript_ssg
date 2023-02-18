// lib
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { Pagination, PaginationPropsType } from './Pagination'

export default {
  title: 'molecules/Pagination',
  component: Pagination
} as Meta

const Template: Story<PaginationPropsType> = (args) => {
  return (
    <div style={{ height: '300px', width: '400px' }}>
      <Pagination {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  currentPage: 1,
  maxCountLinkPerPage: 5,
  totalCount: 120
}
