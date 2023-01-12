// react
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { FullWidth } from './FullWidth'
import { Box } from '@/components/atoms/Box/Box'

export default {
  title: 'templates/FullWidth',
  component: FullWidth
} as Meta

const Template: Story = () => {
  return (
    <FullWidth>
      <Box>
        <div style={{ padding: '20px' }}>
          <p>FullWidth に入れるコンテンツです。</p>
          <br />
          <p>
            横幅一杯にコンテンツを配置したい場合は、このテンプレートを使用します。
          </p>
        </div>
      </Box>
    </FullWidth>
  )
}

export const Default = Template.bind({})
Default.args = {}
