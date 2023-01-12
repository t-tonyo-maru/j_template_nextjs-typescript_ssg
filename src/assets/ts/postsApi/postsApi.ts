// assets
import { createFetch } from '@/assets/ts/createFetch/createFetch'

/**
 * jsonplaceholder の posts を取得する関数です。
 *
 * @param {string} - id: 取得したい post の id です。特定の post 1件を取得する場合に指定します。id を指定しなければ、全件取得します。
 * @return {Promise<Response>} - fetchの実行結果
 */
export const getPosts = (id?: string) => {
  const gettter = createFetch({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  })

  return typeof id !== 'undefined' && id.length > 0
    ? gettter({
        path: `/posts/${id}`
      })
    : gettter({
        path: `/posts`
      })
}
