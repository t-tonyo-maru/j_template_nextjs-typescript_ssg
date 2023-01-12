// react
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { Box, BoxPropsType } from './Box'

export default {
  title: 'atoms/Box',
  component: Box
} as Meta

const defaultChildren = (
  <div style={{ height: '100%', padding: '20px', width: '100%' }}>
    <p>boxの中に入るコンテンツです。</p>
  </div>
)

const Template: Story<BoxPropsType> = (args) => {
  return (
    <div style={{ height: '300px', width: '400px' }}>
      <Box {...args}>{defaultChildren}</Box>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
