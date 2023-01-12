// react
import React from 'react'
// components
import Wrapper from '@/components/templates/Wrapper/Wrapper'
// style
import style from './FullWidth.module.scss'

type PropsType = Readonly<{
  children: React.ReactNode
}>

export const FullWidth = ({ children }: PropsType) => {
  return (
    <Wrapper>
      <div className={style.fullWidth}>
        <main>{children}</main>
      </div>
    </Wrapper>
  )
}
