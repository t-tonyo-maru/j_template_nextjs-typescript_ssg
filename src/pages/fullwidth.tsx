// next/react
import type { NextPage } from 'next'
import React from 'react'
// components
import { FullWidth } from '@/components/templates/FullWidth/FullWidth'
import { Button } from '@/components/atoms/Button/Button'

const FullWidthPage: NextPage = () => {
  return (
    <FullWidth>
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
    </FullWidth>
  )
}

export default FullWidthPage
