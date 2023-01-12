// react / next
import React from 'react'
// module
import cn from 'classnames'
// style
import style from './Tabs.module.scss'

export type TabType = Readonly<{
  id: number
  name: string
}>

export type TabsPropsType = Readonly<{
  current: number
  tabs: TabType[]
  handleClick: (id: number) => void
}>

export const Tabs = ({ tabs, current, handleClick }: TabsPropsType) => {
  // 選択中のタブの id
  const currentId = current <= tabs.length && current > 1 ? current : 1
  /**
   * handleChangeTab
   * タブを選択した時に発火する関数
   * @param {React.MouseEvent<HTMLElement>} - event: 押下したタブのid
   */
  const handleChangeTab = (event: React.MouseEvent<HTMLElement>) => {
    // 選択したタブの id
    const id =
      typeof event.currentTarget.dataset.id === 'undefined'
        ? 1
        : parseInt(event.currentTarget.dataset.id, 10)
    // 親コンポーネントへ選択した tab の id を送信する
    handleClick(id)
  }

  // タブ要素
  const tabItems = tabs.map((tab, index) => {
    return (
      <li
        className={cn({
          [style.tab]: true,
          [style.current]: index + 1 === currentId
        })}
        key={tab.id}
      >
        <button
          className={style.tabButton}
          onClick={handleChangeTab}
          data-id={tab.id}
        >
          {tab.name}
        </button>
      </li>
    )
  })

  return <ul className={style.tabs}>{tabItems.length > 0 && tabItems}</ul>
}
