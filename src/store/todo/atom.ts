// lib
import { atom } from 'recoil'
// type
import { TodoType } from '@/store/todo/type'

export const todosAtom = atom<TodoType[]>({
  key: 'todosAtom',
  default: []
})
