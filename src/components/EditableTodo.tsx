import { ChangeEvent, FC, useState } from 'react'
import { TodoType } from '../store/todo-slice'
import { useTodos } from '../hooks/use-todos'
import {
  Editable,
  EditablePreview,
  EditableInput,
  Input,
} from '@chakra-ui/react'

type EditableItemPropsType = {
  todo: TodoType
}

export const EditableTodo: FC<EditableItemPropsType> = ({ todo }) => {
  const [title, setTitle] = useState<string>(todo.title)
  const { updateTodoTitle } = useTodos(todo)

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  return (
    <Editable
      defaultValue={title}
      onSubmit={() => updateTodoTitle(title)}
      isDisabled={todo.completed}
    >
      <EditablePreview />
      <Input
        as={EditableInput}
        width={'90%'}
        height={'24px'}
        fontSize={'14px'}
        focusBorderColor="#259795"
        onChange={handleChangeTitle}
      />
    </Editable>
  )
}
