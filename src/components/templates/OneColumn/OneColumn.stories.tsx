// react
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { OneColumn } from './OneColumn'
import { Box } from '@/components/atoms/Box/Box'

export default {
  title: 'templates/OneColumn',
  component: OneColumn
} as Meta

const Template: Story = () => {
  return (
    <OneColumn>
      <Box>
        <div style={{ padding: '20px' }}>
          <p>OneColumn に入れるコンテンツです。</p>
          <br />
          <p>1カラムレイアウトにしたい場合は、このテンプレートを使用します。</p>
          <br />
          <p>カラムサイズは src/styles/config/variables に定義しています。</p>
          <p>
            スタイルは src/components/templates/OneColumn/OneColumn.module.scss
            で適用しています。
          </p>
        </div>
      </Box>
    </OneColumn>
  )
}

export const Default = Template.bind({})
Default.args = {}
