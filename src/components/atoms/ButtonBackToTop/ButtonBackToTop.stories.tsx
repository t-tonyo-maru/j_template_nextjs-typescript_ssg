// react
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { ButtonBackToTop } from './ButtonBackToTop'

export default {
  title: 'atoms/ButtonBackToTop',
  component: ButtonBackToTop
} as Meta

const Template: Story = () => {
  return <ButtonBackToTop />
}

export const Default = Template.bind({})
Default.args = {}
