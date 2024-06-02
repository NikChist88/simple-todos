import { TodosForm } from '../components/TodosForm'
import { TodosFilter } from '../components/TodosFilter'
import { TodosList } from '../components/TodosList'

export const HomePage = () => {
  return (
    <div className="app">
      <TodosForm />
      <TodosFilter />
      <TodosList />
    </div>
  )
}
