// lib
import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  GetStaticPropsResult
} from 'next'
import Link from 'next/link'
// interface
import { PostType } from '@/@types/post'
// components
import { OneColumn } from '@/components/templates/OneColumn/OneColumn'
import {
  Breadcrumb,
  BreadcrumbItemType
} from '@/components/molecules/Breadcrumb/Breadcrumb'
// assets
import { getPosts } from '@/assets/ts/postsApi/postsApi'

type Props = Readonly<{
  post?: PostType
  error?: string
}>

const Post: NextPage<Props> = ({ post, error }: Props) => {
  if (typeof error === 'string' && error.length > 0) {
    return (
      <OneColumn>
        <p>
          <span style={{ color: 'red' }}>Error:</span> {error}
        </p>
      </OneColumn>
    )
  }

  const breadcrumbLink: BreadcrumbItemType[] = [
    {
      id: 0,
      name: 'home',
      url: '/'
    },
    {
      id: 1,
      name: 'posts',
      url: '/posts?id=1'
    },
    {
      id: 2,
      name: typeof post !== 'undefined' ? post.title : '',
      url: ''
    }
  ]

  return (
    <>
      {post && (
        <OneColumn>
          <div>
            <Breadcrumb links={breadcrumbLink} />
            <hr />
            <p>id: {post.id}</p>
            <p>userId: {post.userId}</p>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
            <hr />
            <Link href='/posts/?id=1'>
              <a>戻る</a>
            </Link>
          </div>
        </OneColumn>
      )}
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
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

  // paths を生成
  const paths = results.map((result) => {
    return {
      params: {
        id: result.id.toString()
      }
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({
  params
}): Promise<GetStaticPropsResult<Props>> => {
  try {
    // params.id を取得
    let id: string
    if (typeof params !== 'undefined' && typeof params.id === 'string') {
      id = params.id
    } else {
      id = '1'
    }

    // props へ渡す post
    let post: PostType = {
      userId: 0,
      id: 0,
      title: '',
      body: ''
    }

    // APIを叩いて params.id に該当する post を取得する
    await getPosts().then(async (res) => {
      const results = await res.json()
      post = Array.isArray(results)
        ? results.find((post) => post.id === parseInt(id, 10))
        : post
    })

    return { props: { post } }
  } catch (err) {
    return err instanceof Error
      ? { props: { error: err.message } }
      : { props: { error: '不明なエラーが発生しました' } }
  }
}
