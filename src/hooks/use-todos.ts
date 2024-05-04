import { useState, ChangeEvent, KeyboardEvent } from 'react'
import { useAppDispatch } from '../store'
import { TodoType } from '../store/todo-slice'
import {
  createTodoTC,
  removeTodoTC,
  toggleTodoStatusTC,
  updateTodoTitleTC,
} from '../store/todo-thunks'

export const useTodos = (todo?: TodoType) => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState<string>('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const removeTodo = () => {
    if (todo && window.confirm(`Delete todo ${todo.title}?`)) {
      dispatch(removeTodoTC(todo.id))
    }
  }

  const toggleTodoStatus = () => {
    todo &&
      dispatch(toggleTodoStatusTC({ id: todo.id, completed: !todo.completed }))
  }

  const addTodo = () => {
    if (title.trim().length) {
      dispatch(createTodoTC(title))
      setTitle('')
    }
  }

  const updateTodoTitle = (title: string) => {
    todo && dispatch(updateTodoTitleTC({ id: todo.id, title: title }))
  }

  return {
    title,
    handleOnChange,
    handleKeyPress,

    removeTodo,
    toggleTodoStatus,
    addTodo,
    updateTodoTitle,
  }
}
