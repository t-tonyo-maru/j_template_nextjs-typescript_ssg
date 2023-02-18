// lib
import React from 'react'
// components
import Wrapper from '@/components/templates/Wrapper/Wrapper'
// style
import style from './OneColumn.module.scss'

type PropsType = Readonly<{
  children: React.ReactNode
}>

export const OneColumn = ({ children }: PropsType) => {
  return (
    <Wrapper>
      <div className={style.oneColumn}>
        <main className={style.main}>{children}</main>
      </div>
    </Wrapper>
  )
}
