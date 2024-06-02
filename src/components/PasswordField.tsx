import { forwardRef, useRef } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from '@chakra-ui/react'

export const PasswordField = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { isOpen, onToggle } = useDisclosure()
    const inputRef = useRef<HTMLInputElement>(null)

    const mergeRef = useMergeRefs(inputRef, ref)
    const onClickReveal = () => {
      onToggle()
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true })
      }
    }

    return (
      <FormControl>
        <FormLabel htmlFor="password">Password:</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="text"
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={
                isOpen ? (
                  <HiEyeOff color="#259795" />
                ) : (
                  <HiEye color="#259795" />
                )
              }
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            focusBorderColor="#259795"
            id="password"
            ref={mergeRef}
            name="password"
            type={isOpen ? 'text' : 'password'}
            autoComplete="current-password"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    )
  }
)

PasswordField.displayName = 'PasswordField'
