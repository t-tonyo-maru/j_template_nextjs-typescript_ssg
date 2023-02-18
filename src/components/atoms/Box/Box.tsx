// lib
import React from 'react'
// style
import style from './Box.module.scss'

export type BoxPropsType = Readonly<{
  children: React.ReactNode
}>

export const Box = ({ children }: BoxPropsType) => {
  return <div className={style.box}>{children}</div>
}
