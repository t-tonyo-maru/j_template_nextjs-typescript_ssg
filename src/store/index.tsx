// react
import React, {
  createContext,
  Dispatch,
  useReducer,
  ReactNode,
  useContext
} from 'react'
// type
import { UserType } from '@/@types/user'
import { ErrorStateType } from '@/@types/error'

// props types
type PropsType = {
  children: ReactNode
}
// グローバルステートの型
type ModelType = {
  user: UserType
  errorState: ErrorStateType
}
// Message の型
type MessageType =
  | { type: 'SetId'; id: number }
  | { type: 'SetUserName'; name: string }
  | { type: 'SetMail'; mail: string }
  | { type: 'SetError'; errorState: { error: Error; key: string } }
  | { type: 'ResetError' }
// グローバルステートの初期値
const initialState: ModelType = {
  user: { id: 0, name: '田中太郎', mail: 'tanaka@taro.co.jp' },
  errorState: new Map<string, Error>()
}

/**
 * update
 * グローバルステート用の reducer 関数
 * @param {ModelType} state - グローバルステート
 * @param {MessageType} action - グローバルステートを更新するための action オブジェクト
 */
const update = (state: ModelType, action: MessageType) => {
  switch (action.type) {
    case 'SetId': {
      const newState = { ...state }
      newState.user.id = action.id
      return newState
    }
    case 'SetUserName': {
      const newState = { ...state }
      newState.user.name = action.name
      return newState
    }
    case 'SetMail': {
      const newState = { ...state }
      newState.user.mail = action.mail
      return newState
    }
    case 'SetError': {
      if (state.errorState.get(action.errorState.key)) {
        return state
      } else {
        const newState = { ...state }
        newState.errorState.set(action.errorState.key, action.errorState.error)
        return newState
      }
    }
    case 'ResetError': {
      const newState = { ...state }
      newState.errorState = new Map<string, Error>()
      return newState
    }
    default: {
      return state
    }
  }
}
// グローバルステート用の update の初期値
const initialDispatch: Dispatch<MessageType> = () => {}

/**
 * グローバルステートを作成
 * グローバルステートとステート更新用関数の初期値をセットする
 */
const Store = createContext({
  globalState: initialState,
  setGlobalState: initialDispatch
})

const StoreProvider = ({ children }: PropsType) => {
  const [globalState, setGlobalState] = useReducer(update, initialState)

  return (
    <Store.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  )
}

/**
 * useContext(Store)を返す関数
 */
const useContextStore = () => useContext(Store)

export { Store, StoreProvider, useContextStore }
