export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

type GaEventPropsType = Readonly<{
  action: string
  category: string
  label: string
  value?: number
}>

/**
 * pageview<br/>
 * Google Analytics でページビューを測定するための関数です。<br/>
 * src/pages/_app.tsx にて発火させる事で next.js 上で測定できるようにしています。
 *
 * @param {string} - url: ページビュー測定対象の url です。
 * @return {void}
 */
export const pageview = (url: string): void => {
  if (!GA_TRACKING_ID) return // TRACKING_ID がなければ発火させない
  if (typeof window === 'undefined') return // window が存在しなければ発火させない
  if (typeof window.gtag === 'undefined') return // GA が存在しなければ発火させない

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

/**
 * event<br/>
 * Google Analytics で特定の event を計測するための関数です。<br/>
 *
 * @param {GaEventPropsType} args - GA event 計測のためのオブジェクト
 * @param {string} args.action - action 値
 * @param {string} args.category - category 値
 * @param {string} args.label - label 値
 * @param {number} args.value - value 値（この項目は必要に応じて string 型も使えるようにした方が良いでしょう。）
 * @return {void}
 */
export const event = ({
  action,
  category,
  label,
  value
}: GaEventPropsType): void => {
  if (!GA_TRACKING_ID) return // TRACKING_ID がなければ発火させない
  if (typeof window === 'undefined') return // window がなければ発火させない
  if (typeof window.gtag === 'undefined') return // GA が存在しなければ発火させない

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
