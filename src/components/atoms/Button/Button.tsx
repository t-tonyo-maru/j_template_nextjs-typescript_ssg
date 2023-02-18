// lib
import React from 'react'
import Link from 'next/link'
// module
import cn from 'classnames'
// style
import style from './Button.module.scss'

export type ButtonPropsType = Readonly<{
  colorType?: string
  fontSize?: string
  linkUrl?: string
  isDisabled?: boolean
  isAnotherWindow?: boolean
  handleClick?: () => void
  children: React.ReactNode
}>

export const Button = ({
  colorType = 'primary',
  fontSize = 'md',
  linkUrl = '',
  isAnotherWindow = false,
  isDisabled = false,
  handleClick = () => {},
  children
}: ButtonPropsType) => {
  // ボタン要素のクラス
  const buttonClass = cn({
    [style.button]: true,
    // カラー
    [style.primary]: colorType === 'primary',
    [style.info]: colorType === 'info',
    [style.success]: colorType === 'success',
    [style.warning]: colorType === 'warning',
    [style.danger]: colorType === 'danger',
    // フォントサイズ
    [style.fontSizeSm]: fontSize === 'sm',
    [style.fontSizeMd]: fontSize === 'md',
    [style.fontSizeLg]: fontSize === 'lg',
    // 非活性
    [style.disabled]: isDisabled
  })

  // ボタンの jsx
  let button = (
    <button className={buttonClass} onClick={handleClick} disabled={isDisabled}>
      {children}
    </button>
  )

  // リンク要素の場合は、ボタンのjsxを上書きする
  if (linkUrl.length > 0) {
    if (isAnotherWindow === true) {
      // 外部リンクの場合
      button = (
        <a
          className={buttonClass}
          href={linkUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          {children}
        </a>
      )
    } else {
      // 内部リンクの場合
      button = (
        <Link href={linkUrl}>
          <a className={buttonClass}>{children}</a>
        </Link>
      )
    }
  }

  return button
}
