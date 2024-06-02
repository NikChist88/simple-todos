import { useTodos } from '../hooks/use-todos'
import { MdAddCircleOutline } from 'react-icons/md'
import { Input, Button, Box } from '@chakra-ui/react'

export const TodosForm = () => {
  const { title, handleOnChange, handleKeyPress, addTodo } = useTodos()

  return (
    <Box className="form">
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
        colorScheme="teal"
        onClick={addTodo}
      >
        <MdAddCircleOutline size={'24px'} />
      </Button>
    </Box>
  )
}
