// lib
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { Breadcrumb, BreadcrumbPropsType } from './Breadcrumb'

export default {
  title: 'molecules/breadcrumb',
  component: Breadcrumb
} as Meta

const Template: Story<BreadcrumbPropsType> = (args) => {
  return (
    <div>
      <Breadcrumb {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  links: [
    {
      id: 0,
      name: 'home',
      url: '/'
    },
    {
      id: 1,
      name: 'hoge',
      url: '/hoge'
    },
    {
      id: 2,
      name: 'hoge-fuga',
      url: '/hoge/fuga'
    },
    {
      id: 3,
      name: 'hoge-fuga-piyo',
      url: '/hoge/fuga/piyo'
    }
  ]
}
