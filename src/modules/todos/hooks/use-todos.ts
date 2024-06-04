import { ChangeEvent, useState } from 'react'
import {
  TodoType,
  useGetTodosQuery,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../../../api/todos-api'
import { useAppSelector } from '../../../store'
import { selectFilter } from '../../../store/filter-slice'

export const useTodos = (todo?: TodoType) => {
  const { data = [], isLoading } = useGetTodosQuery()
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()
  const [title, setTitle] = useState(todo?.title)
  const filter = useAppSelector(selectFilter)

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const updateTodoTitle = async () => {
    if (todo && title) {
      await updateTodo({ ...todo, title })
    }
  }

  const toggleTodoStatus = async () => {
    todo && (await updateTodo({ ...todo, completed: !todo.completed }))
  }

  const removeTodo = async () => {
    if (todo && window.confirm(`Delete todo ${todo.title}?`)) {
      await deleteTodo(todo.id)
    }
  }

  let filteredTodos = data

  switch (filter) {
    case 'completed':
      filteredTodos = filteredTodos.filter((todo) => todo.completed)
      break
    case 'active':
      filteredTodos = filteredTodos.filter((todo) => !todo.completed)
      break
    default:
      filteredTodos
  }

  return {
    title,
    handleChangeTitle,

    updateTodoTitle,
    toggleTodoStatus,
    removeTodo,
    filteredTodos,
    isLoading,
  }
}
