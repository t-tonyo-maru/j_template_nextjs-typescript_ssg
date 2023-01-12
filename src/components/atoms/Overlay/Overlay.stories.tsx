// react
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { Overlay, OverlayPropsType } from './Overlay'

export default {
  title: 'atoms/Overlay',
  component: Overlay
} as Meta

const Template: Story<OverlayPropsType> = (args) => {
  return (
    <div style={{ backgroundColor: '#fff', height: '600px', width: '600px' }}>
      <Overlay {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  handleClose: () => {
    console.log('handleClose')
  }
}
