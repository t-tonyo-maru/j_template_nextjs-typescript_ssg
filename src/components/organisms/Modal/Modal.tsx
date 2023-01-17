// react
import React from 'react'
// module
import cn from 'classnames'
// components
import { Overlay } from '@/components/atoms/Overlay/Overlay'
import { Box } from '@/components/atoms/Box/Box'
// style
import style from './Modal.module.scss'
// type
export type ModalPropsType = Readonly<{
  isShow: boolean
  handleClose: (isShow: boolean) => void
}>

export const Modal = ({
  isShow = false, // モーダルを表示するか
  handleClose // モーダルを非表示にする親コンポーネントの関数
}: ModalPropsType) => {
  const modalClass = cn({
    [style.modal]: true,
    [style.isShow]: isShow
  })
  /**
   * coloseModal
   * モーダルを非表示にする関数
   */
  const coloseModal = (
    event?: React.MouseEvent<HTMLAnchorElement, MouseEvent> | Event
  ) => {
    if (event) {
      event.preventDefault()
    }
    handleClose(false)
  }

  return (
    <div className={modalClass}>
      <Overlay handleClose={coloseModal} />
      <div className={style.modalContent}>
        <Box>
          <div style={{ padding: '20px' }}>
            <p>モーダルの中身です。</p>
            <hr />
            <a onClick={coloseModal}>閉じる</a>
          </div>
        </Box>
      </div>
    </div>
  )
}
