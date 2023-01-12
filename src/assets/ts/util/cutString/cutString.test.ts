import { cutString } from '@/assets/ts/util/cutString/cutString'

// テストデータ
const testString =
  'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほ'

// 正常系
describe('cutString: 正常系テスト', () => {
  it('30文字を20文字までカットした時、正しく文字列がカットされていること', () => {
    expect(cutString({ text: testString, count: 20 })).toBe(
      'あいうえおかきくけこさしすせそたちつて…'
    )
  })
  it('30文字を20文字までカットした時、文字数が20になっていること', () => {
    expect(cutString({ text: testString, count: 20 }).length).toBe(20)
  })
  it('カットされた文字列の末尾は、「…」になっていること', () => {
    expect(cutString({ text: testString, count: 20 }).slice(-1)).toBe('…')
  })
})

// 異常系
describe('cutString: 異常系テスト', () => {
  it('空文字は、空文字のママ返されること', () => {
    expect(cutString({ text: '', count: 10 })).toBe('')
  })
  it('カットする文字数に0を指定した場合は、文字列は変更されずに返されること', () => {
    expect(cutString({ text: testString, count: 0 })).toBe(testString)
  })
  it('カットする文字数に負の数を指定した場合は、文字列は変更されずに返されること', () => {
    expect(cutString({ text: testString, count: -1 })).toBe(testString)
  })
})
