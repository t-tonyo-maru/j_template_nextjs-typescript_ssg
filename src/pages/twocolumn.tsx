// next/react
import type { NextPage } from 'next'
import React from 'react'
// components
import { TwoColumn } from '@/components/templates/TwoColumn/TwoColumn'
import { Button } from '@/components/atoms/Button/Button'
import { Box } from '@/components/atoms/Box/Box'
import { Sidebar } from '@/components/organisms/Sidebar/Sidebar'

const TwoColumnPage: NextPage = () => {
  const sub = (
    <Sidebar>
      <Box>
        <div style={{ padding: '20px' }}>
          <p>サイドバーです。</p>
          <p>サイドバーコンテンツが表示されていきます。</p>
        </div>
      </Box>
    </Sidebar>
  )

  return (
    <TwoColumn sub={sub}>
      <h1>Hello Next.js 👋</h1>
      <ul>
        <li style={{ height: '60px', width: '300px' }}>
          <Button>テストボタン</Button>
        </li>
        <li style={{ height: '60px', width: '300px' }}>
          <Button colorType='info' linkUrl='/'>
            サイト内リンク
          </Button>
        </li>
        <li style={{ height: '60px', width: '300px' }}>
          <Button
            colorType='success'
            linkUrl='https://google.com'
            isAnotherWindow={true}
          >
            google（外部サイトリンク）
          </Button>
        </li>
        <li style={{ height: '60px', width: '300px' }}>
          <Button
            colorType='danger'
            handleClick={() => {
              console.log('テストボタンを押下しました')
            }}
          >
            テストボタン
          </Button>
        </li>
      </ul>
    </TwoColumn>
  )
}

export default TwoColumnPage
