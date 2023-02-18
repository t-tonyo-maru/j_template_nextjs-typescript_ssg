// lib
import React from 'react'
// style
import style from './Overlay.module.scss'

export type OverlayPropsType = Readonly<{
  handleClose?: () => void
}>

export const Overlay = ({ handleClose }: OverlayPropsType) => {
  return <div className={style.overlay} onClick={handleClose}></div>
}
