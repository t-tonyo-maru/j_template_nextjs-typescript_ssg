// react / next
import React from 'react'
// style
import style from './Sidebar.module.scss'

export type SidebarPropsType = Readonly<{
  children: React.ReactNode
}>

export const Sidebar = ({ children }: SidebarPropsType) => {
  return <div className={style.sidebar}>{children}</div>
}
