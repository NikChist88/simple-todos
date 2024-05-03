import { TodoItem } from './TodoItem'
import { List, Spinner } from '@chakra-ui/react'
import { useAppSelector } from '../store'
import { selectIsLoading } from '../store/todo-slice'
import { useFilter } from '../hooks/use-filter'

export const TodosList = () => {
  console.log('rendered TodosList')

  const isLoading = useAppSelector(selectIsLoading)
  const filteredTodos = useFilter()

  if (isLoading) {
    return (
      <Spinner
        thickness="3px"
        speed="0.5s"
        emptyColor="gray.200"
        color="#259795"
        size="xl"
        position={'absolute'}
        top={'240px'}
      />
    )
  }

  return (
    <>
      <List
        className="list"
        spacing={3}
      >
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
        <span className="total">
          {!filteredTodos.length
            ? 'No Todos! ☹️'
            : `Total Todos: ${filteredTodos.length} 🤗`}
        </span>
      </List>
    </>
  )
}
