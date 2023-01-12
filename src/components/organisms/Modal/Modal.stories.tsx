// react
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { Modal, ModalPropsType } from './Modal'

export default {
  title: 'organisms/Modal',
  component: Modal
} as Meta

const Template: Story<ModalPropsType> = (args) => {
  return <Modal {...args} />
}

export const Default = Template.bind({})
Default.args = {
  isShow: true,
  handleClose: () => {}
}
