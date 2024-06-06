import { Spinner } from '../../ui/Spinner'
import { TodosForm, TodosFilter, TodosList } from './components'
import { useTodos } from './hooks/use-todos'

export const Todos = () => {
  const { filteredTodos, isLoading } = useTodos()

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="border border-[#1A1B3A] max-w-[450px] w-full min-h-[400px] flex flex-col items-center py-[30px] px-[25px] bg-[#1A1B3A]">
        <span className="text-[24px] text-[#fff] font-bold mb-[30px]">
          Taskify!
        </span>
        <TodosForm />
        <TodosList
          todos={filteredTodos}
          isLoading={isLoading}
        />
        <TodosFilter />
      </div>
    </div>
  )
}
