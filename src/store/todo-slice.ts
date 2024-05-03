import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTodosTC } from './todo-thunks'

export type TodoType = {
  id: string
  title: string
  completed: boolean
}

type InitialStateType = {
  todos: TodoType[]
  isLoading: boolean
  error: string | null
}

const initialState: InitialStateType = {
  todos: [],
  isLoading: false,
  error: null,
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodoAC(state, action: PayloadAction<TodoType>) {
      state.todos.push(action.payload)
    },
    removeTodoAC(state, action: PayloadAction<TodoType>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    toggleTodoAC(state, action: PayloadAction<TodoType>) {
      state.todos.map((todo) =>
        todo.id !== action.payload.id
          ? todo
          : (todo.completed = !todo.completed)
      )
    },
    updateTodoTitleAC(state, action: PayloadAction<TodoType>) {
      state.todos.map((todo) =>
        todo.id !== action.payload.id
          ? todo
          : (todo.title = action.payload.title)
      )
    },
  },
  selectors: {
    selectAllTodos: (state) => state.todos,
    selectIsLoading: (state) => state.isLoading,
  },
  extraReducers: (builder) => {
    builder.addCase(getTodosTC.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getTodosTC.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload) {
        state.todos = action.payload
      }
    })
  },
})

export const { createTodoAC, removeTodoAC, toggleTodoAC, updateTodoTitleAC } =
  todoSlice.actions
export const todoReducer = todoSlice.reducer
export const { selectAllTodos, selectIsLoading } = todoSlice.selectors
