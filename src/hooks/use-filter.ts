import { selectFilter } from '../store/filter-slice'
import { useAppSelector } from '../store'
import { useGetTodosQuery } from '../api/todos-api'

export const useFilter = () => {
  const { data = [], isLoading } = useGetTodosQuery()
  const filter = useAppSelector(selectFilter)
  
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

  return { filteredTodos, isLoading }
}
