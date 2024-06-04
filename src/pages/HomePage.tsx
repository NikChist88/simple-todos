import { Spinner } from '../ui/Spinner'
import { TodosForm } from '../components/TodosForm'
import { TodosFilter } from '../components/TodosFilter'
import { TodosList } from '../components/TodosList'
import { useFilter } from '../hooks/use-filter'

export const HomePage = () => {
  const { filteredTodos, isLoading } = useFilter()

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="flex flex-col items-center">
      <TodosForm />
      <TodosFilter />
      <TodosList todos={filteredTodos} />
    </div>
  )
}
