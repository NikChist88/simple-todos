import { FC } from 'react'
import { List } from '@chakra-ui/react'
import { TodoItem } from './TodoItem'
import { TodoType } from '../../../api/todos-api'

type TodosListProps = {
  todos: TodoType[]
}

export const TodosList: FC<TodosListProps> = ({ todos }) => {
  return (
    <>
      <List
        className="p-[15px] border rounded-[5px] border-[#dfdddd]"
        spacing={3}
      >
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
        <span className="inline-block w-full text-right text-[14px] font-medium">
          {!todos.length ? 'No Todos! ☹️' : `Total Todos: ${todos.length} 🤗`}
        </span>
      </List>
    </>
  )
}
