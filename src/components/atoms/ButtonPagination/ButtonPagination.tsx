// lib
import React from 'react'
import Link from 'next/link'
// module
import cn from 'classnames'
// style
import style from './ButtonPagination.module.scss'

export type ButtonPaginationPropsType = Readonly<{
  linkUrl?: string
  isDisabled?: boolean
  isCurrent?: boolean
  children: React.ReactNode
}>

export const ButtonPagination = ({
  linkUrl = '',
  isDisabled = false,
  isCurrent = false,
  children
}: ButtonPaginationPropsType) => {
  // ボタン要素のクラス
  const buttonPaginationClass = cn({
    [style.buttonPagination]: true,
    // 現在表示中のページの場合
    [style.current]: isCurrent,
    // 非活性
    [style.disabled]: isDisabled
  })

  return (
    <>
      {isDisabled ? (
        <div className={buttonPaginationClass}>{children}</div>
      ) : (
        <Link href={linkUrl}>
          <a className={buttonPaginationClass}>{children}</a>
        </Link>
      )}
    </>
  )
}
