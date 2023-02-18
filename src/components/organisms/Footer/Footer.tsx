// lib
import React from 'react'
// style
import style from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <p>footerです。</p>
      </div>
    </footer>
  )
}
