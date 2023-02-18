// lib
import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
// hooks
import { useScrollStop } from '@/hooks/useScrollStop/useScrollStop.hooks'
import { useModal } from '@/components/organisms/Modal/Modal.hooks'
// store
import { todosState, todosSizeState } from '@/store/todo/selector'
import { useUpdateTodos } from '@/store/todo/update'
import { errorsState, errorsCountState } from '@/store/error/selector'
import { useUpdateErrors } from '@/store/error/update'
// components
import { Box } from '@/components/atoms/Box/Box'
import { Button } from '@/components/atoms/Button/Button'
import { Icon } from '@/components/atoms/Icon/Icon'
import { Heading } from '@/components/atoms/Heading/Heading'
import { Modal } from '@/components/organisms/Modal/Modal'
import { OneColumn } from '@/components/templates/OneColumn/OneColumn'
// style
import style from '@/styles/pages/index.module.scss'
// metas
import meta from '@/assets/json/meta/meta.json'

// 以下の記述で環境変数を参照できる
// console.log(process.env.NEXT_PUBLIC_DOMAIN)

const IndexPage: NextPage = () => {
  // Modal コンポーネントを制御するカスタムフック
  const { isInit, isModalShow, setIsModalShow } = useModal()
  // スクロール禁止を担うhooksを読み込む
  const { setScrollStopState } = useScrollStop()

  // recoil todo
  const todos = useRecoilValue(todosState)
  const todosSize = useRecoilValue(todosSizeState)
  const updateTodos = useUpdateTodos()
  // recoil errors
  const errors = useRecoilValue(errorsState)
  const errorsSize = useRecoilValue(errorsCountState)
  const updateErrors = useUpdateErrors()

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
   * maybeErrorFunc
   * エラーが発生するかもしれない関数
   */
  const maybeErrorFunc = () => {
    if (Math.random() >= 0.5) {
      updateErrors({
        type: 'SET',
        payload: {
          newError: {
            errorCode: '0000',
            error: new Error('不明なエラーが発生しました。')
          }
        }
      })
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
        </ul>
        <br />
        <Box>
          <div style={{ padding: '16px' }}>
            <ul>
              {todos.map((todo) => {
                return (
                  <li key={todo.id}>
                    <p>{todo.title}</p>
                    <p>{todo.isComplete ? '完了' : '未完'}</p>
                  </li>
                )
              })}
            </ul>
            <br />
            <p>TODOの総数: {todosSize}</p>
            <br />
            <ul className={style.links}>
              <li>
                <Button
                  colorType='danger'
                  handleClick={() => {
                    updateTodos({
                      type: 'ADD',
                      payload: {
                        title: '新しいタスクです'
                      }
                    })
                  }}
                >
                  TODOを追加する
                </Button>
              </li>
              <li>
                <Button
                  colorType='warning'
                  handleClick={() => {
                    updateTodos({
                      type: 'RESET'
                    })
                  }}
                >
                  TODOを追加する
                </Button>
              </li>
            </ul>
          </div>
        </Box>
        <Box>
          <div style={{ padding: '16px' }}>
            <ul>
              {errors.map((err) => {
                return (
                  <li key={err.id}>
                    <p>Error Code: {err.errorCode}</p>
                    <p>Error Message: {err.error.message}</p>
                  </li>
                )
              })}
            </ul>
            <br />
            <p>Errorの総数: {errorsSize}</p>
            <br />
            <ul className={style.links}>
              <li>
                <Button colorType='danger' handleClick={maybeErrorFunc}>
                  エラーが起きる…かも
                </Button>
              </li>
              <li>
                <Button
                  colorType='warning'
                  handleClick={() => {
                    updateErrors({
                      type: 'RESET'
                    })
                  }}
                >
                  エラーをすべて解除する
                </Button>
              </li>
            </ul>
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
