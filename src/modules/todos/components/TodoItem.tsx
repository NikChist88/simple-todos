import { FC } from 'react'
import { EditableTodo } from './EditableTodo'
import { Checkbox } from '@chakra-ui/react'
import { TodoType } from '../../../api/todos-api'
import { useTodos } from '../hooks/use-todos'
import { RiDeleteBin6Line } from 'react-icons/ri'

type TodoPropsType = {
  todo: TodoType
}

export const TodoItem: FC<TodoPropsType> = ({ todo }) => {
  const { toggleTodoStatus, removeTodo } = useTodos(todo)

  return (
    <div className="list-item">
      <Checkbox
        colorScheme="white"
        isChecked={todo.completed}
        onChange={toggleTodoStatus}
      />
      <EditableTodo todo={todo} />
      <RiDeleteBin6Line
        size={18}
        onClick={removeTodo}
        cursor={'pointer'}
      />
    </div>
  )
}
