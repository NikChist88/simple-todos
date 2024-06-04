import { useState, ChangeEvent, KeyboardEvent } from 'react'
import { useAddTodoMutation } from '../api/todos-api'
import { nanoid } from '@reduxjs/toolkit'

export const useTodosForm = () => {
  const [title, setTitle] = useState<string>('')
  const [addTodo] = useAddTodoMutation()

  const createTodo = async () => {
    const todo = {
      id: nanoid(),
      title: title,
      completed: false,
    }

    if (title.trim().length) {
      await addTodo(todo)
      setTitle('')
    }
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const handleKeyPress = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      createTodo()
    }
  }

  return {
    title,
    handleOnChange,
    handleKeyPress,

    createTodo,
  }
}
