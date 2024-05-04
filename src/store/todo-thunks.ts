import { createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import { api } from '../api/api'
import { RootState } from '.'
import {
  createTodoAC,
  removeTodoAC,
  toggleTodoAC,
  updateTodoTitleAC,
} from './todo-slice'

export const getTodosTC = createAsyncThunk('todos/getTodosTC', async () => {
  try {
    const { data } = await api.getTodos()
    return data
  } catch (error) {
    alert(error)
  }
})

export const createTodoTC = createAsyncThunk(
  'todos/createTodoTC',
  async (title: string, { dispatch }) => {
    try {
      const todo = {
        id: nanoid(),
        title: title,
        completed: false,
      }
      const { data } = await api.createTodo(todo)
      dispatch(createTodoAC(data))
    } catch (error) {
      alert(error)
    }
  }
)

export const removeTodoTC = createAsyncThunk(
  'todos/removeTodoTC',
  async (id: string, { dispatch }) => {
    try {
      const { data } = await api.removeTodo(id)
      dispatch(removeTodoAC(data))
    } catch (error) {
      alert(error)
    }
  }
)

export const toggleTodoStatusTC = createAsyncThunk(
  'todos/toggleTodoTC',
  async (param: { id: string; completed: boolean }, { dispatch, getState }) => {
    const { todos } = getState() as RootState
    const todo = todos.todos.find((todo) => todo.id === param.id)

    try {
      if (todo) {
        const { data } = await api.updateTodo(param.id, {
          ...todo,
          completed: param.completed,
        })
        dispatch(toggleTodoAC(data))
      }
    } catch (error) {
      alert(error)
    }
  }
)

export const updateTodoTitleTC = createAsyncThunk(
  'todos/updateTodoTitleTC',
  async (param: { id: string; title: string }, { dispatch, getState }) => {
    const { todos } = getState() as RootState
    const todo = todos.todos.find((todo) => todo.id === param.id)

    try {
      if (todo) {
        const { data } = await api.updateTodo(param.id, {
          ...todo,
          title: param.title,
        })
        dispatch(updateTodoTitleAC(data))
      }
    } catch (error) {
      alert(error)
    }
  }
)
