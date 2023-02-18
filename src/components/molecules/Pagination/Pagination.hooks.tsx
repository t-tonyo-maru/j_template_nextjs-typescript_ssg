// lib
import { useMemo } from 'react'
// types
export type UseSetLinksType = Readonly<{
  currentPage: number
  countSideLinks: number
  maxCountLinkPerPage?: number
  totalPage: number
}>

/**
 * getCountSideLinks
 * カレントの両サイドのリンクの個数を取得する関数
 * @param {number} maxCountLinkPerPage - 1Pあたりに表示するボタンの最大個数
 * @return {number} - カレントの両サイドのリンクの個数 / 2
 */
const getCountSideLinks = (maxCountLinkPerPage: number) => {
  return (maxCountLinkPerPage - 1) / 2
}

/**
 * getTotalPage
 * 総ページ数を取得する関数
 * @param {number} totalCount - コンテンツの最大数
 * @param {number} maxCountLinkPerPage - 1Pあたりに表示するボタンの最大個数
 * @return {number} - 総ページ数
 */
const getTotalPage = (totalCount: number, maxCountLinkPerPage: number) => {
  return Math.ceil(totalCount / maxCountLinkPerPage)
}

/**
 * useSetLinks
 * ページネーションのリンク要素群を生成するカスタムフック
 * @param {UseSetLinksType} args - ページネーションのリンク要素群を生成するための値をまとめたオブジェクト
 * @return {object} - ページネーションのリンク要素群のカスタムフック
 */
const useSetLinks = ({
  currentPage,
  countSideLinks,
  maxCountLinkPerPage,
  totalPage
}: UseSetLinksType) => {
  // リンク群
  const links = useMemo(
    (start: number = currentPage - countSideLinks) => {
      const _start = start < 1 ? 1 : start
      const _links: number[] = [...Array(maxCountLinkPerPage)].map(
        (_, index) => {
          return _start + index
        }
      )
      return _links.filter((link) => {
        return link > 0 && link <= totalPage
      })
    },
    [currentPage, countSideLinks, maxCountLinkPerPage, totalPage]
  )

  return {
    links
  }
}

export { getCountSideLinks, getTotalPage, useSetLinks }
