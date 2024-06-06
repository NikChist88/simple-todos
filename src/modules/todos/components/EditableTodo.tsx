import { FC } from 'react'
import { TodoType } from '../../../api/todos-api'
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
  const { title, handleChangeTitle, updateTodoTitle } = useTodos(todo)

  return (
    <Editable
      defaultValue={title}
      onSubmit={updateTodoTitle}
      isDisabled={todo.completed}
      marginRight={'auto'}
    >
      <EditablePreview cursor={'pointer'} />
      <Input
        as={EditableInput}
        width={'100%'}
        height={'28px'}
        fontSize={'14px'}
        maxLength={25}
        focusBorderColor="#fff"
        border={'none'}
        onChange={handleChangeTitle}
      />
    </Editable>
  )
}
