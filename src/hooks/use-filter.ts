import { selectAllTodos } from '../store/todo-slice'
import { selectFilter } from '../store/filter-slice'
import { useAppSelector } from '../store'

export const useFilter = () => {
  const todos = useAppSelector(selectAllTodos)
  const filter = useAppSelector(selectFilter)
  let filteredTodos = todos

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

  return filteredTodos
}
