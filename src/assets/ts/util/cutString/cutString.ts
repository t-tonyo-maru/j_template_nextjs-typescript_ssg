/**
 * 長い文字列をカットして '…' を最後につけた文字列を返す
 *
 * @param args - cutString関数用オプション
 * @param {string} args.text - 省略対象の文字列
 * @param {number} args.count - 何文字まで表示するか
 * @return {string} - 省略した文字列
 */
export const cutString = ({
  text,
  count
}: {
  text: string
  count: number
}): string => {
  if (count <= 0) {
    return text
  }

  if (text.length > count - 1) {
    text = text.substring(0, count - 1)
    text += '…'
  }

  return text
}
