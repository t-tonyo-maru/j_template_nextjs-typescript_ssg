import { useState, useEffect, useRef } from 'react'

/**
 * useModal
 * Modal コンポーネントを制御するためのカスタムフックです。
 * @returns {Object} モーダル関連の state と更新関数をまとめたオブジェクトです。
 */
export const useModal = () => {
  // ページが初期化されたか
  const [isInit, setIsInit] = useState(false)
  // モーダルの表示/非表示を管理する state
  const [isModalShow, setIsModalShow] = useState(false)
  // React v18のuseEffectの再描画に対応
  const mounted = useRef(false)
  useEffect(() => {
    if (mounted.current === true) return
    mounted.current = true
    setIsInit(true)
  }, [])

  return {
    isInit,
    isModalShow,
    setIsModalShow
  }
}
