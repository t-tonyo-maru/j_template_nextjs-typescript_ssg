// lib
import { useRecoilCallback, CallbackInterface } from 'recoil'
// atom
import { todosAtom } from '@/store/todo/atom'
// type
import { ActionType } from '@/store/todo/type'

/**
 * error atom を更新する関数の本体<br/>
 * 引数を受け取る → その引数を元に error atom を更新したいため、高階関数になっています
 *
 * @param args
 * @param {CallbackInterface['set']} set - recoilのセット関数
 * @return {(action: ActionType) => void}
 */
const update = ({ set }: { set: CallbackInterface['set'] }) => {
  return (action: ActionType) => {
    switch (action.type) {
      case 'ADD': {
        set(todosAtom, (prev) => {
          return [
            ...prev,
            {
              id: new Date().getTime(),
              title: action.payload.title,
              isComplete: false
            }
          ]
        })
        break
      }
      case 'DELETE': {
        set(todosAtom, (prev) => {
          return prev.filter((todo) => todo.id !== action.payload.id)
        })
        break
      }
      case 'UPDATE': {
        set(todosAtom, (prev) => {
          return prev.map((todo) => {
            return todo.id === action.payload.updatedTodo.id
              ? action.payload.updatedTodo
              : todo
          })
        })
        break
      }
      case 'RESET': {
        set(todosAtom, () => [])
        break
      }
      default: {
        break
      }
    }
  }
}

/**
 * todo atom を更新する関数を生成する
 * useRecoilCallback は <RecoilRoot>配下のコンポーネント内で呼び出さなければならないため、hooks のように関数化しています
 *
 * @return {(action: ActionType) => void}
 */
export const useUpdateTodos = () => {
  return useRecoilCallback(update)
}
