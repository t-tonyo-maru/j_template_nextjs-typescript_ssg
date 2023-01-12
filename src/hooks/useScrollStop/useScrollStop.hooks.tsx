// react
import { useReducer, useCallback } from 'react'

// Stateの型
type StateType = {
  scrollTop: number // bodyのスクロール量
  isStopScroll: boolean // スクロール禁止中か
}
// Actionの型
type ActionType = { type: 'Stop' } | { type: 'Release' }

/**
 * スクロール禁止状態を切り替えるhooks
 * TODO: setScrollStopState() 関数を button タグの onClick に付与して、実行すると不要なスクロールイベントが発生する。
 * Google Chrome / Firefox で確認済み。Safari では不具合は発生しなかった。
 * button タグではなく、他のタグ（aタグ等…）を利用すれば問題はない。この挙動について調査/解消をすること。
 *
 * @return {{scrollStopState: StateType, setScrollStopState: Dispatch<ActionType>}}
 */
export const useScrollStop = () => {
  // 初期値
  const initialState: StateType = {
    scrollTop: 0,
    isStopScroll: false
  }

  /**
   * useReducerの更新関数<br/>
   * スクロール禁止状態を切り替える処理の本体
   *
   * @param {StateType} state - スクロール禁止処理における状態
   * @param {ActionType} action - スクロール禁止状態切替のためのフラグ
   */
  const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case 'Release': {
        // スクロール禁止
        const body = document.querySelector('body')!
        // 各スタイルを初期値で更新
        body.style.top = ''
        body.style.left = ''
        body.style.right = ''
        body.style.position = 'static'
        body.style.overflow = 'visible'
        // スクロール値をセット
        window.scrollTo(0, state.scrollTop)
        // ステートを更新
        return {
          ...state,
          isStopScroll: false
        }
      }
      case 'Stop': {
        // スクロール禁止を解除
        const body = document.querySelector('body')!
        // 各スタイルをスクロール禁止用に更新
        body.style.top = window.scrollY * -1 + 'px'
        body.style.left = '0'
        body.style.right = '0'
        body.style.overflow = 'hidden'
        // TODO: 以下は応急処置。いつか解消すること。
        // body.style.top と body.style.position を同一スコープ内で更新すると
        // body.style.top = 0
        // body.style.position = "fixed"
        // …となってしまい、画面が上部へスクロールしてしまう。React の ShadowDOM が関係しているかもしれない。
        // したがって、setTimeout で body.style.position の処理を若干遅延させている
        setTimeout(() => {
          body.style.position = 'fixed'
        }, 0.1 * 1000)
        // ステートを更新
        return {
          scrollTop: window.scrollY,
          isStopScroll: true
        }
      }
      default: {
        return state
      }
    }
  }

  const [scrollStopState, setScrollStopState] = useReducer(
    reducer,
    initialState
  )

  return {
    scrollStopState,
    setScrollStopState: useCallback(setScrollStopState, [])
  }
}
