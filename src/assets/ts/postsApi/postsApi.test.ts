// jest の非同期処理のデフォルトのタイムアウト時間は 5s。
// それでは短すぎるので、以下のように 60s に設定を上書き。
jest.setTimeout(60 * 1000)

import { getPosts } from '@/assets/ts/postsApi/postsApi'

const validPost = {
  userId: 1,
  id: 1,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
}

describe('getPosts: 正常系テスト', () => {
  it('https://jsonplaceholder.typicode.com/posts から取得したデータの1番目が validPost と同一であること', async () => {
    let result: any

    await getPosts()
      .then(async (res) => {
        result = await res.json()
        const target = Array.isArray(result) ? result[0] : []
        expect(target).toEqual(validPost)
      })
      .catch(() => {
        expect(true).toBe(false)
        throw new Error('getPosts に失敗しました')
      })
  })
})
