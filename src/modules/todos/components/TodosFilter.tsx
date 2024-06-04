import { Stack, Button } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../../store'
import { changeFilterAC, selectFilter } from '../../../store/filter-slice'

export const TodosFilter = () => {
  const dispatch = useAppDispatch()
  const filter = useAppSelector(selectFilter)

  return (
    <Stack
      direction="row"
      spacing={4}
      align="center"
      marginBottom={'30px'}
    >
      <Button
        colorScheme="teal"
        variant="solid"
        size={'sm'}
        onClick={() => dispatch(changeFilterAC('all'))}
        isActive={filter === 'all'}
      >
        All
      </Button>
      <Button
        colorScheme="teal"
        variant="solid"
        size={'sm'}
        onClick={() => dispatch(changeFilterAC('active'))}
        isActive={filter === 'active'}
      >
        Active
      </Button>
      <Button
        colorScheme="teal"
        variant="solid"
        size={'sm'}
        onClick={() => dispatch(changeFilterAC('completed'))}
        isActive={filter === 'completed'}
      >
        Completed
      </Button>
    </Stack>
  )
}
