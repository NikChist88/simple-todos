import { FC } from 'react'
import { TodoItem } from './TodoItem'
import { TodoType } from '../../../api/todos-api'
import { Spinner } from '../../../ui/Spinner'

type TodosListProps = {
  todos: TodoType[]
  isLoading: boolean
}

export const TodosList: FC<TodosListProps> = ({ todos, isLoading }) => {
  return (
    <div className="relative w-full min-h-[300px] flex flex-col gap-[15px] mb-[30px]">
      {isLoading ? (
        <Spinner />
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))
      )}
    </div>
  )
}
