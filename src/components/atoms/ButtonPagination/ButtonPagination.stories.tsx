// lib
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { ButtonPagination, ButtonPaginationPropsType } from './ButtonPagination'

export default {
  title: 'atoms/ButtonPagination',
  component: ButtonPagination
} as Meta

const Template: Story<ButtonPaginationPropsType> = (args) => {
  return (
    <div style={{ height: '30px', width: '30px' }}>
      <ButtonPagination {...args}>{args.children}</ButtonPagination>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  linkUrl: '/',
  children: '1'
}

export const Previous = Template.bind({})
Previous.args = {
  linkUrl: '/',
  children: '<'
}

export const Next = Template.bind({})
Next.args = {
  linkUrl: '/',
  children: '>'
}

export const Current = Template.bind({})
Current.args = {
  linkUrl: '',
  isCurrent: true,
  children: '3'
}

export const Disabled = Template.bind({})
Disabled.args = {
  linkUrl: '',
  isDisabled: true,
  children: '3'
}
