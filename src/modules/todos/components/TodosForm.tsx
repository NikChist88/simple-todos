import { Input, Button } from '@chakra-ui/react'
import { useTodosForm } from '../hooks/use-todos-form'

export const TodosForm = () => {
  const { title, handleOnChange, handleKeyPress, createTodo } = useTodosForm()

  return (
    <div className="w-full flex mb-[30px]">
      <Input
        placeholder="Enter the task..."
        size="sm"
        focusBorderColor="#815CD2"
        onChange={handleOnChange}
        onKeyUp={handleKeyPress}
        value={title}
        maxLength={25}
        color={'#fff'}
        height={'35px'}
      />
      <Button
        fontSize={'12px'}
        height={'36px'}
        borderRadius={'none'}
        colorScheme="purple"
        onClick={createTodo}
        marginLeft={'-1px'}
      >
        Add Task
      </Button>
    </div>
  )
}
