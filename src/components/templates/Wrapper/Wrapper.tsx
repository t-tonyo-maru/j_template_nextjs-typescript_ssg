// lib
import React from 'react'
// style
import style from './Wrapper.module.scss'
// components
import { Header } from '@/components/organisms/Header/Header'
import { Footer } from '@/components/organisms/Footer/Footer'

type Props = Readonly<{
  children: React.ReactNode
}>

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className={style.wrapper}>
        <Header />
        <div className={style.container}>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
