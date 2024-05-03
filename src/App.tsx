import { useEffect } from 'react'
import { TodosForm } from './components/TodosForm'
import { TodosList } from './components/TodosList'
import { TodosFilter } from './components/TodosFilter'
import { useAppDispatch } from './store'
import { getTodosTC } from './store/todo-thunks'
import './App.css'

export const App = () => {
  console.log('rendered App')

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTodosTC())
  }, [])

  return (
    <div className="app">
      <TodosForm />
      <TodosFilter />
      <TodosList />
    </div>
  )
}
