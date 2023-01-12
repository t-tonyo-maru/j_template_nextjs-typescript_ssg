// react
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { Tabs, TabsPropsType } from './Tabs'

export default {
  title: 'molecules/Tabs',
  component: Tabs
} as Meta

const Template: Story<TabsPropsType> = (args) => {
  return <Tabs {...args} />
}

export const Default = Template.bind({})
Default.args = {
  tabs: [
    {
      id: 1,
      name: 'home'
    },
    {
      id: 2,
      name: 'about us'
    },
    {
      id: 3,
      name: 'privacy policy'
    }
  ],
  current: 1,
  handleClick: (id: number) => {
    console.log('変更後の tab の id: ', id)
  }
}
