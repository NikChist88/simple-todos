import { Input, Button, Box } from '@chakra-ui/react'
import { MdAddCircleOutline } from 'react-icons/md'
import { useTodosForm } from '../hooks/use-todos-form'

export const TodosForm = () => {
  const { title, handleOnChange, handleKeyPress, createTodo } = useTodosForm()

  return (
    <Box className="max-w-[600px] w-full py-[20px] flex items-center justify-center gap-[10px]">
      <Input
        height={'35px'}
        variant={'flushed'}
        focusBorderColor="#259795"
        onChange={handleOnChange}
        onKeyUp={handleKeyPress}
        value={title}
        maxLength={25}
        placeholder="Please enter todo..."
      />
      <Button
        height={35}
        colorScheme="teal"
        onClick={createTodo}
      >
        <MdAddCircleOutline size={'24px'} />
      </Button>
    </Box>
  )
}
