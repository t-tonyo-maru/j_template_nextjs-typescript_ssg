// lib
import type { NextPage } from 'next'
import React from 'react'
// components
import { FullWidth } from '@/components/templates/FullWidth/FullWidth'
import { Button } from '@/components/atoms/Button/Button'

const FullWidthPage: NextPage = () => {
  return (
    <FullWidth>
      <h1>Hello Next.js π</h1>
      <ul>
        <li style={{ height: '60px', width: '300px' }}>
          <Button>γγΉγγγΏγ³</Button>
        </li>
        <li style={{ height: '60px', width: '300px' }}>
          <Button colorType='info' linkUrl='/'>
            γ΅γ€γεγͺγ³γ―
          </Button>
        </li>
        <li style={{ height: '60px', width: '300px' }}>
          <Button
            colorType='success'
            linkUrl='https://google.com'
            isAnotherWindow={true}
          >
            googleοΌε€ι¨γ΅γ€γγͺγ³γ―οΌ
          </Button>
        </li>
        <li style={{ height: '60px', width: '300px' }}>
          <Button
            colorType='danger'
            handleClick={() => {
              console.log('γγΉγγγΏγ³γζΌδΈγγΎγγ')
            }}
          >
            γγΉγγγΏγ³
          </Button>
        </li>
      </ul>
    </FullWidth>
  )
}

export default FullWidthPage
