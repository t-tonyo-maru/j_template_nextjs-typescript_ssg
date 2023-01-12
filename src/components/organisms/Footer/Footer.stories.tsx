// react
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { Footer } from './Footer'

export default {
  title: 'organisms/Footer',
  component: Footer
} as Meta

const Template: Story = () => {
  return <Footer />
}

export const Default = Template.bind({})
Default.args = {}
