// lib
import { useRecoilCallback, CallbackInterface } from 'recoil'
// atom
import { errorsAtom } from '@/store/error/atom'
// type
import { ActionType } from '@/store/error/type'

/**
 * todo atom を更新する関数の本体<br/>
 * 引数を受け取る → その引数を元に todo atom を更新したいため、高階関数になっています
 *
 * @param args
 * @param {CallbackInterface['set']} set - recoilのセット関数
 * @return {(action: ActionType) => void}
 */
const update = ({ set }: { set: CallbackInterface['set'] }) => {
  return (action: ActionType) => {
    switch (action.type) {
      case 'SET': {
        set(errorsAtom, (prev) => {
          const maxId =
            prev.length === 0 ? 0 : Math.max(...prev.map((err) => err.id))
          return [
            ...prev,
            {
              id: maxId + 1,
              ...action.payload.newError
            }
          ]
        })
        break
      }
      case 'DELETE': {
        set(errorsAtom, (prev) => {
          return prev.filter((err) => err.id !== action.payload.id)
        })
        break
      }
      case 'RESET': {
        set(errorsAtom, () => [])
        break
      }
      default: {
        break
      }
    }
  }
}

/**
 * error atom を更新する関数を生成する
 * useRecoilCallback は <RecoilRoot>配下のコンポーネント内で呼び出さなければならないため、hooks のように関数化しています
 *
 * @return {(action: ActionType) => void}
 */
export const useUpdateErrors = () => {
  return useRecoilCallback(update)
}
