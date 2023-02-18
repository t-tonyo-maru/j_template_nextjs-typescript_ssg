// lib
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import Head from 'next/head'
// recoil
import { RecoilRoot } from 'recoil'
// assets
import * as gtag from '@/assets/ts/gtag/gtag'
// global style
import '@/styles/style.scss'
// metas
import meta from '@/assets/json/meta/meta.json'

const App = ({ Component, pageProps }: AppProps) => {
  // ページ移動で Google Analytics を発火させる
  const router = useRouter()
  const mounted = useRef(false)
  useEffect(() => {
    if (mounted.current === true) return
    mounted.current = true
    // 以降の処理を1度のみ実行
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>{meta.title}</title>
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default App
