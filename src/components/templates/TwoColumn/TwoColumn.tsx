// lib
import React from 'react'
// components
import Wrapper from '@/components/templates/Wrapper/Wrapper'
// style
import style from './TwoColumn.module.scss'

export type TwoColumnPropsType = Readonly<{
  sub: React.ReactNode
  children: React.ReactNode
}>

export const TwoColumn = ({
  sub, // サブコンテンツ
  children // メインコンテンツ
}: TwoColumnPropsType) => {
  return (
    <Wrapper>
      <div className={style.twoColumn}>
        <main className={style.main}>{children}</main>
        <aside className={style.sidebar}>{sub}</aside>
      </div>
    </Wrapper>
  )
}
