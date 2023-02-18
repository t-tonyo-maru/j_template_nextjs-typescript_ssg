// TODO の型
export type TodoType = {
  id: number
  title: string
  isComplete: boolean
}

// Action の型
export type ActionType =
  | {
      type: 'ADD'
      payload: { title: string }
    }
  | {
      type: 'DELETE'
      payload: {
        id: number
      }
    }
  | {
      type: 'UPDATE'
      payload: {
        updatedTodo: TodoType
      }
    }
  | { type: 'RESET' }
