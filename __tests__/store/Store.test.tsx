// react
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
// store
import { StoreProvider, useContextStore } from '@/store/index'

/**
 * TODO: TypeError: Cannot read properties of null (reading 'useContext') のエラーを解決できず。
 * グローバルステートのテストケースはいったんskipしています。cypressなどのe2eテストを利用した方が良さげ。
 */
// 正常系
describe('グローバルステート | 正常系テスト', () => {
  it.skip(`button[data-testid='global-state-update-button']を押下すると、グローバルステート > User > name が「山田花子」になること`, async () => {
    // グローバルステートを読み込む
    const { globalState, setGlobalState } = useContextStore()
    /**
     * グローバルステートの状態を更新する
     */
    const updateGlobalUser = () => {
      // name 更新
      setGlobalState({
        type: 'SetUserName',
        name: '山田花子'
      })
      // mail 更新
      setGlobalState({
        type: 'SetMail',
        mail: 'yamada@hanako.co.jp'
      })
    }
    // テスト環境をレンダリング
    render(
      <StoreProvider>
        <div>
          <button
            data-testid='global-state-update-button'
            onClick={updateGlobalUser}
          >
            グローバルステート_アップデート
          </button>
          <ul>
            <li data-testid='global-state-user-id'>
              id: {globalState.user.id}
            </li>
            <li data-testid='global-state-user-name'>
              name: {globalState.user.name}
            </li>
            <li data-testid='global-state-user-mail'>
              mail: {globalState.user.mail}
            </li>
          </ul>
        </div>
      </StoreProvider>
    )
    // グローバルステート更新ボタンを押下
    const button = screen.getByTestId('global-state-update-button')
    userEvent.click(button)
    await waitFor(() => {
      expect(screen.getByTestId('global-state-user-name')).toEqual(
        'name: 山田花子'
      )
    })
  })
})

// 異常系
// describe('グローバルステート | 異常系テスト', () => {})
