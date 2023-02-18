// lib
import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
// style
import style from './Breadcrumb.module.scss'

export type BreadcrumbItemType = Readonly<{
  id: number
  name: string
  url: string
}>

export type BreadcrumbPropsType = Readonly<{
  links: BreadcrumbItemType[]
}>

export const Breadcrumb = ({ links }: BreadcrumbPropsType) => {
  const currentBreadcrumbClass = cn({
    [style.breadcrumbLink]: true,
    [style.current]: true
  })

  const breadcrumbItems = links.map((link, index) => {
    if (links.length !== index + 1) {
      return (
        <li key={link.id} className={style.breadcrumbItem}>
          <Link href={link.url}>
            <a className={style.breadcrumbLink}>{link.name}</a>
          </Link>
        </li>
      )
    } else {
      return (
        <li key={link.id} className={style.breadcrumbItem}>
          <span className={currentBreadcrumbClass}>{link.name}</span>
        </li>
      )
    }
  })

  return (
    <div className={style.breadcrumbWrapper}>
      {links.length > 0 && (
        <ul className={style.breadcrumb}>{breadcrumbItems}</ul>
      )}
    </div>
  )
}
