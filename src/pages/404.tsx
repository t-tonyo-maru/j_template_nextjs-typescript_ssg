// lib
import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
// components
import { Button } from '@/components/atoms/Button/Button'
import { Heading } from '@/components/atoms/Heading/Heading'
import { OneColumn } from '@/components/templates/OneColumn/OneColumn'
// metas
import meta from '@/assets/json/meta/meta.json'

const Custom404: NextPage = () => {
  return (
    <OneColumn>
      <Head>
        <title>{`ページが見つかりませんでした | ${meta.title}`}</title>
        <meta name='description' content='ページが見つかりませんでした' />
      </Head>
      <Heading level={2}>404 Not Found</Heading>
      <Heading level={3}>ページが見つかりませんでした</Heading>
      <br />
      <p style={{ height: '60px', width: '300px' }}>
        <Button colorType='info' linkUrl='/' fontSize='sm'>
          トップへ戻る
        </Button>
      </p>
    </OneColumn>
  )
}

export default Custom404
