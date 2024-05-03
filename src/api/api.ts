import axios from 'axios'
import { TodoType } from '../store/todo-slice'

const mockAPI = axios.create({
  baseURL: 'https://661c178ae7b95ad7fa69ab18.mockapi.io/api/v1/',
})

export const api = {
  getTodos() {
    return mockAPI.get<TodoType[]>('todos')
  },
  createTodo(todo: TodoType) {
    return mockAPI.post('todos', todo)
  },
  removeTodo(id: string) {
    return mockAPI.delete(`todos/${id}`)
  },
  updateTodo(id: string, todo: TodoType) {
    return mockAPI.put(`todos/${id}`, todo)
  },
  updateTodoTitle(id: string, title: string) {
    return mockAPI.put(`todos/${id}`, { title: title })
  },
}
