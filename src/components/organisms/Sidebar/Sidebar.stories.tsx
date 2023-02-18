// lib
import React from 'react'
import { Story, Meta } from '@storybook/react'
// component
import { Sidebar } from './Sidebar'
import { Box } from '@/components/atoms/Box/Box'

export default {
  title: 'organisms/Sidebar',
  component: Sidebar
} as Meta

const Template: Story = () => {
  return (
    <div style={{ width: '420px' }}>
      <Sidebar>
        <Box>
          <div style={{ padding: '20px' }}>
            <p>Sidebar に入れるコンテンツです。</p>
            <br />
            <p>おすすめコンテンツ</p>
            <ul>
              <li>おすすめコンテンツ 1</li>
              <li>おすすめコンテンツ 2</li>
              <li>おすすめコンテンツ 3</li>
            </ul>
            <br />
            <p>アクセスランキング</p>
            <ol>
              <li>アクセスランキング 1</li>
              <li>アクセスランキング 2</li>
              <li>アクセスランキング 3</li>
            </ol>
          </div>
        </Box>
      </Sidebar>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
