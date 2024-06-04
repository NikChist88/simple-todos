import { Spinner } from '../../ui/Spinner'
import { TodosForm, TodosFilter, TodosList } from './components'
import { useTodos } from './hooks/use-todos'

export const Todos = () => {
  const { filteredTodos, isLoading } = useTodos()

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
