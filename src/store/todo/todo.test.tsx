// lib
import { snapshot_UNSTABLE } from 'recoil'
import '@testing-library/jest-dom/extend-expect'
// recoil store
import { TodoType } from '@/store/todo/type'
import { todosAtom } from '@/store/todo/atom'
import { todosState } from '@/store/todo/selector'

// 正常系
describe('recoil store TODO: 正常系テスト', () => {
  it('TODO を追加できること', async () => {
    const mockTodo = {
      id: 0,
      title: 'new title',
      isComplete: false
    }

    const testSnapshot = snapshot_UNSTABLE(({ set }) =>
      set(todosAtom, (prev: TodoType[]) => {
        return [...prev, mockTodo]
      })
    )
    const target = testSnapshot.getLoadable(todosState).getValue().at(0)
    expect(target).toBe(mockTodo)
  })
})
