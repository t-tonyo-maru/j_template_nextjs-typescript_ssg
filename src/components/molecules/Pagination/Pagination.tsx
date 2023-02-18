// lib
import React from 'react'
// components
import { ButtonPagination } from '@/components/atoms/ButtonPagination/ButtonPagination'
// customHooks
import {
  getCountSideLinks,
  getTotalPage,
  useSetLinks
} from '@/components/molecules/Pagination/Pagination.hooks'
// style
import style from './Pagination.module.scss'

export type PaginationPropsType = Readonly<{
  listPageUrl: string
  currentPage: number
  maxCountLinkPerPage?: number
  totalCount: number
}>

export const Pagination = ({
  listPageUrl = '/', // ボタンのリンク先
  currentPage = 1, // 現在表示中のページの番号
  maxCountLinkPerPage = 5, // 1Pあたりに表示するボタンの最大個数
  totalCount // コンテンツの最大数
}: PaginationPropsType) => {
  // カレントの両サイドのリンクの個数 / 2
  const countSideLinks = getCountSideLinks(maxCountLinkPerPage)
  // 総ページ数
  const totalPage = getTotalPage(totalCount, maxCountLinkPerPage)
  // リンク群
  const { links } = useSetLinks({
    currentPage,
    countSideLinks,
    maxCountLinkPerPage,
    totalPage
  })
  // ボタン群
  const buttons = links.map((link) => {
    return (
      <li className={style.paginationItem} key={link}>
        <ButtonPagination
          linkUrl={`${listPageUrl}${link}`}
          isCurrent={link === currentPage}
        >
          {link}
        </ButtonPagination>
      </li>
    )
  })
  // 前へボタン
  const prevButton =
    currentPage === 1 ? (
      <ButtonPagination isDisabled={true}>&lt;</ButtonPagination>
    ) : (
      <ButtonPagination
        linkUrl={`${listPageUrl}${(currentPage - 1).toString()}`}
      >
        &lt;
      </ButtonPagination>
    )
  // 次へボタン
  const nextButton =
    currentPage === totalPage ? (
      <ButtonPagination isDisabled={true}>&gt;</ButtonPagination>
    ) : (
      <ButtonPagination
        linkUrl={`${listPageUrl}${(currentPage + 1).toString()}`}
      >
        &gt;
      </ButtonPagination>
    )

  return (
    <div className={style.paginationWrapper}>
      <ul className={style.pagination}>
        <li className={style.paginationItem}>{prevButton}</li>
        {links.length > 0 && buttons}
        <li className={style.paginationItem}>{nextButton}</li>
      </ul>
    </div>
  )
}
