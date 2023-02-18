// lib
import React from 'react'
import { render } from '@testing-library/react'
// components
import { Modal, ModalPropsType } from '@/components/organisms/Modal/Modal'

// 正常系
describe('components/organisms/Modal/Modal: 正常系テスト', () => {
  it('Modal テストコード - サンプル', () => {
    const testModalProps: ModalPropsType = {
      isShow: false,
      handleClose: (isShow: boolean) => {
        console.log(isShow)
      }
    }
    const { container } = render(<Modal {...testModalProps} />)
    expect(container.querySelector(`div[class*="modal"]`)).not.toBeNull()
  })
})

// 異常系
// describe('components/organisms/Modal/Modal: 異常系テスト', () => {})
