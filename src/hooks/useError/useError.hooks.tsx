// react
import { useMemo, useCallback } from 'react'
// store
import { useContextStore } from '@/store/index'

/**
 * グローバルステートのエラーオブジェクト管理用のサンプル
 * @return {ReturnType<useError>}
 */
export const useError = () => {
  // グローバルステートを取得
  const { globalState, setGlobalState } = useContextStore()

  /**
   * グローバルステートにエラーオブジェクトをセットする
   * setErrorはあくまでサンプル関数です。
   * 実際のアプリ開発時は、ページやコンポーネントに応じて、適宜グローバルステートのエラーオブジェクトをセットする関数を定義してください。
   */
  const setError = useCallback(() => {
    setGlobalState({
      type: 'SetError',
      errorState: {
        key: '000',
        error: new Error('不明なエラーが発生しました')
      }
    })
  }, [])
  /**
   * グローバルステートのエラーオブジェクトをリセットする
   */
  const resetError = useCallback(() => {
    setGlobalState({
      type: 'ResetError'
    })
  }, [])
  /**
   * グローバルステートにエラーオブジェクトが存在するか
   * @return {boolean}
   */
  const hasGlobalError = useMemo(() => {
    return globalState.errorState.size > 0
  }, [globalState.errorState.size])
  /**
   * グローバルステートのエラーオブジェクト（Mapオブジェクト）からエラーオブジェクトを取得する
   * @param {string} key - Mapのキー
   * @return {Error | undefined}
   */
  const getGlobalError = useCallback((key: string) => {
    return globalState.errorState.get(key)
  }, [])

  return {
    setError,
    resetError,
    hasGlobalError,
    getGlobalError
  }
}
