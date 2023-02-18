// lib
import React from 'react'
import Link from 'next/link'
// style
import style from './Header.module.scss'

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <ul className={style.links}>
          <li>Header です。 / </li>
          <li>
            <Link href='/'>
              <a>TOP</a>
            </Link>
          </li>
          <li>
            <Link href='/posts?id=1'>
              <a>API ページ一覧</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
