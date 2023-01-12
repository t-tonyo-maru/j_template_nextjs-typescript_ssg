// react
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// components
import { Button } from '@/components/atoms/Button/Button'

// 正常系
describe('components/atoms/Button/Button: 正常系テスト', () => {
  it('Buttonコンポーネントが描画されること', () => {
    const { container } = render(<Button>blank</Button>)
    expect(container.querySelector(`*[class*="button"]`)).not.toBeNull()
  })

  it('Buttonコンポーネントにchildrenが渡せること', () => {
    const testChildren = 'テストボタン'
    render(<Button>{testChildren}</Button>)
    expect(screen.getByText(testChildren)).toBeInTheDocument()
  })
})

// 異常系
// describe('components/atoms/Button/Button: 異常系テスト', () => {})
