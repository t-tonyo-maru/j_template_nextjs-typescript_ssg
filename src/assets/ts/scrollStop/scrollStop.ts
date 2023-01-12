/**
 * ページ全体のスクロール可不可を制御する関数です<br/>
 * ※ただし、iOS（iOS15.5まで）ではスクロールできてしまう不具合があり
 *
 * @param {boolean} isStop: ページ全体をスクロール不可にするか
 * @return {void}
 */
export const scrollStop = (isStop = false) => {
  const html = document.querySelector('html')
  const body = document.querySelector('body')

  if (html === null || body === null) return

  if (isStop) {
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
  } else {
    html.style.overflow = ''
    body.style.overflow = ''
  }
}
