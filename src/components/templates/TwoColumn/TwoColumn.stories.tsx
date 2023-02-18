// lib
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { TwoColumn, TwoColumnPropsType } from './TwoColumn'
import { Box } from '@/components/atoms/Box/Box'
import { Sidebar } from '@/components/organisms/Sidebar/Sidebar'

export default {
  title: 'templates/TwoColumn',
  component: TwoColumn
} as Meta

const Template: Story<TwoColumnPropsType> = (args) => {
  return <TwoColumn {...args} />
}

export const Default = Template.bind({})
Default.args = {
  sub: (
    <Sidebar>
      <Box>
        <div style={{ padding: '20px' }}>
          <p>サイドバーです。</p>
          <p>サイドバーコンテンツが表示されていきます。</p>
        </div>
      </Box>
    </Sidebar>
  ),
  children: (
    <Box>
      <div style={{ padding: '20px' }}>
        <p>TwoColumn に入れるコンテンツです。</p>
        <br />
        <p>2カラムレイアウトにしたい場合は、このテンプレートを使用します。</p>
        <br />
        <p>
          左右のカラムサイズは src/styles/config/variables に定義しています。
        </p>
        <p>
          スタイルは src/components/templates/TwoColumn/TwoColumn.module.scss
          で適用しています。
        </p>
        <br />
        <p>
          メインコンテンツは main タグで囲んでおり、サイドバーは aside
          タグで囲んでいます。
        </p>
      </div>
    </Box>
  )
}
