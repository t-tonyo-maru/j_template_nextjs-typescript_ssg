// react / next
import React from 'react'
// style
import style from './Heading.module.scss'

export type HeadingPropsType = Readonly<{
  level: number
  children: React.ReactNode
}>

export const Heading = ({ level = 1, children }: HeadingPropsType) => {
  switch (level) {
    case 1:
      return <h1 className={style.heading}>{children}</h1>
    case 2:
      return <h2 className={style.heading}>{children}</h2>
    case 3:
      return <h3 className={style.heading}>{children}</h3>
    case 4:
      return <h4 className={style.heading}>{children}</h4>
    case 5:
      return <h5 className={style.heading}>{children}</h5>
    case 6:
      return <h6 className={style.heading}>{children}</h6>
    default:
      return <h1 className={style.heading}>{children}</h1>
  }
}
