// react
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { Heading, HeadingPropsType } from './Heading'

export default {
  title: 'atoms/Heading',
  component: Heading
} as Meta

const Template: Story<HeadingPropsType> = (args) => {
  return <Heading {...args}>{args.children}</Heading>
}

export const Heading1 = Template.bind({})
Heading1.args = {
  level: 1,
  children: 'h1タグのテキストです。'
}

export const Heading2 = Template.bind({})
Heading2.args = {
  level: 2,
  children: 'h2タグのテキストです。'
}

export const Heading3 = Template.bind({})
Heading3.args = {
  level: 3,
  children: 'h3タグのテキストです。'
}

export const Heading4 = Template.bind({})
Heading4.args = {
  level: 4,
  children: 'h4タグのテキストです。'
}

export const Heading5 = Template.bind({})
Heading5.args = {
  level: 5,
  children: 'h5タグのテキストです。'
}

export const Heading6 = Template.bind({})
Heading6.args = {
  level: 6,
  children: 'h6タグのテキストです。'
}
