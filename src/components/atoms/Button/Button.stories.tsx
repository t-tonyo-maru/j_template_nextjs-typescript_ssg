// react
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { Button, ButtonPropsType } from './Button'

export default {
  title: 'atoms/Button',
  component: Button
} as Meta

const Template: Story<ButtonPropsType> = (args) => {
  return (
    <div style={{ height: '40px', width: '160px' }}>
      <Button {...args}>テストボタン</Button>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  linkUrl: '/'
}

export const Primary = Template.bind({})
Primary.args = {
  colorType: 'primary',
  linkUrl: '/'
}

export const Info = Template.bind({})
Info.args = {
  colorType: 'info',
  linkUrl: '/'
}

export const Success = Template.bind({})
Success.args = {
  colorType: 'success',
  linkUrl: '/'
}

export const Warning = Template.bind({})
Warning.args = {
  colorType: 'warning',
  linkUrl: '/'
}

export const Danger = Template.bind({})
Danger.args = {
  colorType: 'danger',
  linkUrl: '/'
}

export const FontSizeSmall = Template.bind({})
FontSizeSmall.args = {
  fontSize: 'sm',
  linkUrl: '/'
}

export const FontSizeLarge = Template.bind({})
FontSizeLarge.args = {
  fontSize: 'lg',
  linkUrl: '/'
}

export const DisabledFunctionButton = Template.bind({})
DisabledFunctionButton.args = {
  isDisabled: true,
  handleClick: () => {
    console.log('disabled test')
  }
}
