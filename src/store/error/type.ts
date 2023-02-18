// エラーコード
export type ErrorCodeType = '0000' | '1000' | '2000' | '3000'
// エラーの型
export type ErrorType = {
  id: number
  errorCode: ErrorCodeType
  error: Error
}
export type NewErrorType = Omit<ErrorType, 'id'>

// Action の型
export type ActionType =
  | {
      type: 'SET'
      payload: { newError: NewErrorType }
    }
  | {
      type: 'DELETE'
      payload: { id: number }
    }
  | {
      type: 'UPDATE'
      payload: { updatedError: ErrorType }
    }
  | { type: 'RESET' }
