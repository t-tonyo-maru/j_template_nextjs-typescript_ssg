// lib
import { selector } from 'recoil'
// atom
import { todosAtom } from '@/store/todo/atom'
// type
import { TodoType } from '@/store/todo/type'

// todo を返す selector
export const todosState = selector({
  key: 'todosState',
  get: ({ get }) => get<TodoType[]>(todosAtom)
})

// todo の件数を返す
export const todosSizeState = selector({
  key: 'todosSizeState',
  get: ({ get }) => get<TodoType[]>(todosAtom).length || 0
})
