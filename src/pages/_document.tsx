// react / next
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
// metas
import meta from '@/assets/json/meta/meta.json'

type Props = Readonly<{}>

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang='ja' dir='ltr'>
        <Head>
          <meta charSet='utf-8' />
          {/* SEO contents */}
          <meta name='keywords' content={meta.keywords} />
          <meta name='description' content={meta.description} />
          {/* Facebook */}
          <meta property='og:title' content={meta.title} />
          <meta property='og:description' content={meta.description} />
          <meta property='og:type' content={meta.ogType} />
          <meta property='og:url' content={meta.ogUrl} />
          {/* <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} /> */}
          <meta property='og:image' content={meta.ogImage} />
          <meta property='og:site_name' content={meta.ogSiteName} />
          <meta property='og:locale' content={meta.ogLocale} />
          {/* Twitter */}
          <meta name='twitter:card' content={meta.twitterCard} />
          <meta name='twitter:title' content={meta.title} />
          <meta name='twitter:description' content={meta.description} />
          <meta name='twitter:image' content={meta.ogImage} />
          {/* icons 一般 */}
          <link rel='shortcut icon' href='/assets/image/app-icon/favicon.ico' />
          <link
            rel='icon'
            sizes='192x192'
            href='/assets/image/app-icon/icon-192x192.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/assets/image/app-icon/apple-touch-icon-180x180.png'
          />
          {/* Google Analytics */}
          {process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                  `
                }}
              />
            </>
          )}
        </Head>
        <body>
          {/* <script> </script> */}
          {/* ↑: Next.js + CSS ModulesでFOUC（CSSの適用遅れによるちらつき）が発生したときの暫定対策 */}
          {/* もし、FOUC（CSSの適用遅れによるちらつき）が発生した場合は、<body>直後の<script> </script>のコメントアウトを解除してください */}
          {/* 詳しくは README.md の FOUC（CSSの適用遅れによるちらつき）が発生したときの暫定対策 を参照してください。 */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
