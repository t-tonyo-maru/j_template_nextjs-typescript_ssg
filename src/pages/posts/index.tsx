// next/react
import type { NextPage, GetStaticProps, GetStaticPropsResult } from 'next'
import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
// interface
import { PostType } from '@/@types/post'
// components
import { OneColumn } from '@/components/templates/OneColumn/OneColumn'
import { Pagination } from '@/components/molecules/Pagination/Pagination'
import {
  Breadcrumb,
  BreadcrumbItemType
} from '@/components/molecules/Breadcrumb/Breadcrumb'
// assets
import { getPosts } from '@/assets/ts/postsApi/postsApi'

type Props = Readonly<{
  posts: PostType[]
  error?: string
}>

// 1Pに表示する post の数
const maxCountContentPerPage = 5
// パンくず
const breadcrumbLink: BreadcrumbItemType[] = [
  {
    id: 0,
    name: 'home',
    url: '/'
  },
  {
    id: 1,
    name: 'posts',
    url: '/posts'
  }
]

const Posts: NextPage<Props> = ({ posts, error }: Props) => {
  // URLパラメータの id を取得する
  const router = useRouter()
  const { id } = router.query
  let currentid = Array.isArray(id) ? id[0] : id
  currentid =
    typeof currentid === 'undefined' ||
    typeof parseInt(currentid, 10) !== 'number'
      ? '1'
      : currentid

  const start = (parseInt(currentid, 10) - 1) * maxCountContentPerPage
  const end = start + maxCountContentPerPage

  // 画面上に表示するコンテンツ
  const displayPosts = useMemo(() => {
    return posts.slice(start, end)
  }, [posts, start, end])

  if (typeof error === 'string' && error.length > 0) {
    return (
      <OneColumn>
        <p>
          <span style={{ color: 'red' }}>Error:</span> {error}
        </p>
      </OneColumn>
    )
  } else {
    return (
      <OneColumn>
        <h1>Posts List</h1>
        <h1>currentid: {currentid}</h1>
        <hr />
        <Breadcrumb links={breadcrumbLink} />
        <hr />
        {displayPosts.length > 0 && (
          <ul>
            {displayPosts.map((post) => {
              return (
                <li key={post.id}>
                  <Link href={`/posts/${post.id}`}>
                    <a>
                      {post.id} | {post.title}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
        <hr />
        <Pagination
          listPageUrl='/posts?id='
          currentPage={parseInt(currentid, 10)}
          maxCountLinkPerPage={maxCountContentPerPage}
          totalCount={posts.length}
        />
        <hr />
        <p>
          <Link href='/'>
            <a>Go home</a>
          </Link>
        </p>
      </OneColumn>
    )
  }
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  try {
    // getPosts の結果を格納する
    let results: PostType[] = []

    await getPosts()
      .then(async (res) => {
        results = await res.json()
      })
      .catch((err) => {
        console.log(err)
        throw new Error('Post ページのパス生成でエラーが発生しました')
      })

    return { props: { posts: results } }
  } catch (err) {
    return err instanceof Error
      ? { props: { posts: [], error: err.message } }
      : { props: { posts: [], error: '不明なエラーが発生しました' } }
  }
}

export default Posts
