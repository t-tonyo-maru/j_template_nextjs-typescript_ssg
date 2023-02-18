// lib
import { atom } from 'recoil'
// type
import { ErrorType } from '@/store/error/type'

export const errorsAtom = atom<ErrorType[]>({
  key: 'errorsAtom',
  default: []
})
