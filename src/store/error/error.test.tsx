// lib
import { snapshot_UNSTABLE } from 'recoil'
import '@testing-library/jest-dom/extend-expect'
// recoil store
import { ErrorType } from '@/store/error/type'
import { errorsAtom } from '@/store/error/atom'
import { errorsState } from '@/store/error/selector'

// 正常系
describe('recoil store Error: 正常系テスト', () => {
  it('Error オブジェクトを追加できること', async () => {
    const mockError: ErrorType = {
      id: 0,
      errorCode: '0000',
      error: new Error('不明なエラーが発生しました')
    }

    const testSnapshot = snapshot_UNSTABLE(({ set }) =>
      set(errorsAtom, (prev: ErrorType[]) => {
        return [...prev, mockError]
      })
    )
    const target = testSnapshot.getLoadable(errorsState).getValue().at(0)
    expect(target).toBe(mockError)
  })
})
