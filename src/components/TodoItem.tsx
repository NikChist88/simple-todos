import { FC } from 'react'
import { EditableTodo } from './EditableTodo'
import { ListItem, Checkbox } from '@chakra-ui/react'
import { TodoType } from '../api/todos-api'
import { useTodos } from '../hooks/use-todos'
import { RiDeleteBin6Line } from 'react-icons/ri'

type TodoPropsType = {
  todo: TodoType
}

export const TodoItem: FC<TodoPropsType> = ({ todo }) => {
  const { toggleTodoStatus, removeTodo } = useTodos(todo)

  return (
    <ListItem className="list-item">
      <Checkbox
        colorScheme="green"
        isChecked={todo.completed}
        onChange={toggleTodoStatus}
      />
      <EditableTodo todo={todo} />
      <RiDeleteBin6Line
        cursor={'pointer'}
        color="red"
        onClick={removeTodo}
        size={'16px'}
      />
    </ListItem>
  )
}
