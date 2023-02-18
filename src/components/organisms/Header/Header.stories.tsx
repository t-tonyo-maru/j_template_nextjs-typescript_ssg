// lib
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { Header } from './Header'

export default {
  title: 'organisms/Header',
  component: Header
} as Meta

const Template: Story = () => {
  return <Header />
}

export const Default = Template.bind({})
Default.args = {}
