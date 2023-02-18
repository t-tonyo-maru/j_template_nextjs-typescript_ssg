// lib
import { selector } from 'recoil'
// atom
import { errorsAtom } from '@/store/error/atom'
// type
import { ErrorType } from '@/store/error/type'

// errors を返す selector
export const errorsState = selector({
  key: 'errorsState',
  get: ({ get }) => get<ErrorType[]>(errorsAtom)
})

// errors の件数を返す
export const errorsCountState = selector({
  key: 'errorsCountState',
  get: ({ get }) => get<ErrorType[]>(errorsAtom).length || 0
})
