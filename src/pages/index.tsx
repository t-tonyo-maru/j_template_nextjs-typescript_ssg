// next/react
import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
// hooks
import { useScrollStop } from '@/hooks/useScrollStop/useScrollStop.hooks'
import { useError } from '@/hooks/useError/useError.hooks'
import { useModal } from '@/components/organisms/Modal/Modal.hooks'
// components
import { Box } from '@/components/atoms/Box/Box'
import { Button } from '@/components/atoms/Button/Button'
import { Icon } from '@/components/atoms/Icon/Icon'
import { Heading } from '@/components/atoms/Heading/Heading'
import { Modal } from '@/components/organisms/Modal/Modal'
import { OneColumn } from '@/components/templates/OneColumn/OneColumn'
// store
import { useContextStore } from '@/store/index'
// style
import style from '@/styles/pages/index.module.scss'
// assets
import { createResultMap } from '@/assets/ts/createResultMap/createResultMap'
// metas
import meta from '@/assets/json/meta/meta.json'

// 以下の記述で環境変数を参照できる
// console.log(process.env.NEXT_PUBLIC_DOMAIN)

const IndexPage: NextPage = () => {
  // グローバルステートを取得
  const { globalState, setGlobalState } = useContextStore()
  // useError を読み込んで、グローバルステートのエラーオブジェクト更新を管理する
  const { setError, resetError, hasGlobalError, getGlobalError } = useError()
  // Modal コンポーネントを制御するカスタムフック
  const { isInit, isModalShow, setIsModalShow } = useModal()
  // スクロール禁止を担うhooksを読み込む
  const { setScrollStopState } = useScrollStop()

  /**
   * handleModal
   * モーダルの表示/不表示を制御する
   */
  const handleModal = () => {
    setScrollStopState({ type: isModalShow ? 'Release' : 'Stop' })
    setIsModalShow(!isModalShow)
  }
  /**
   * closeModal
   * モーダルを閉じる関数
   */
  const closeModal = () => {
    setScrollStopState({ type: 'Release' })
    setIsModalShow(false)
  }

  /**
   * updateGlobalUser
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

  /**
   * maybeErrorFunc
   * エラーが発生するかもしれない関数
   * createResultMapのサンプルコード
   */
  const maybeErrorFunc = () => {
    const getRandomNum = () => {
      const r = Math.random()
      if (r < 0.2) {
        throw new Error('getRandomNum内エラー')
      }
      return r
    }
    const result = createResultMap<number>(getRandomNum)
    if (result.get('data')) {
      console.log('成功: ', result.get('data'))
    }
    if (result.get('error')) {
      console.log('エラー: ', result.get('error'))
    }
  }

  return (
    <OneColumn>
      <Head>
        <title>{`index の title | ${meta.title}`}</title>
        <meta name='keywords' content='index keyowrd' />
        <meta name='description' content='index description' />
      </Head>
      <div className={style.indexPage}>
        <Heading level={1}>Hello Next.js 👋</Heading>
        <Icon size='md' isInActive={false} />
        <ul className={style.links}>
          <li>
            <Button>テストボタン</Button>
          </li>
          <li>
            <Button colorType='info' linkUrl='/' fontSize='sm'>
              サイト内リンク
            </Button>
          </li>
          <li>
            <Button
              colorType='success'
              linkUrl='https://google.com'
              isAnotherWindow={true}
              fontSize='lg'
            >
              google（外部サイトリンク）
            </Button>
          </li>
          <li>
            <Button
              colorType='warning'
              handleClick={() => {
                handleModal()
              }}
            >
              モーダル表示ボタン
            </Button>
          </li>
          <li>
            <Button colorType='danger' handleClick={maybeErrorFunc}>
              createResultMap テスト | エラーが起きるかもしれない関数を実行する
            </Button>
          </li>
          <li>
            <Button colorType='danger' handleClick={setError}>
              エラー発生ボタン
            </Button>
          </li>
          <li>
            <Button
              colorType='danger'
              handleClick={resetError}
              isDisabled={!hasGlobalError}
            >
              エラーリセットボタン
            </Button>
          </li>
        </ul>
        <br />
        <Box>
          <div style={{ padding: '16px' }}>
            <button onClick={updateGlobalUser}>グローバルステート更新</button>
            <hr />
            <p>グローバルステートの値を表示</p>
            <ul>
              <li>id: {globalState.user.id}</li>
              <li>name: {globalState.user.name}</li>
              <li>mail: {globalState.user.mail}</li>
            </ul>
            <pre>
              {hasGlobalError && typeof getGlobalError('000') !== 'undefined' && (
                <div>
                  <pre>{getGlobalError('000')?.message}</pre>
                  <pre>{getGlobalError('000')?.name}</pre>
                  <pre>{getGlobalError('000')?.stack}</pre>
                </div>
              )}
            </pre>
          </div>
        </Box>
      </div>
      {/* SSG後の不具合に対応するために div タグで囲んでいます。 */}
      <div style={{ display: isInit ? 'block' : 'none' }}>
        <Modal isShow={isModalShow} handleClose={closeModal} />
      </div>
    </OneColumn>
  )
}

export default IndexPage
