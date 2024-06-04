import { ChangeEvent, useState } from 'react'
import { TodoType } from '../api/todos-api'
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../api/todos-api'

export const useTodos = (todo: TodoType) => {
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()
  const [title, setTitle] = useState(todo.title)

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const updateTodoTitle = async () => {
    await updateTodo({ ...todo, title })
  }

  const toggleTodoStatus = async () => {
    await updateTodo({ ...todo, completed: !todo.completed })
  }

  const removeTodo = async () => {
    if (window.confirm(`Delete todo ${todo.title}?`)) {
      await deleteTodo(todo.id)
    }
  }

  return {
    title,
    handleChangeTitle,

    updateTodoTitle,
    toggleTodoStatus,
    removeTodo,
  }
}
