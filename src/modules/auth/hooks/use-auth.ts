import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type Data = {
  email: string
  password: string
}

export const useAuth = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      rememberMe: false,
    },
  })

  const onLoginSubmit: SubmitHandler<Data> = (data) => {}
  const onRegisterSubmit: SubmitHandler<Data> = async (data) => {}

  return {
    register,
    handleSubmit,
    onLoginSubmit,
    onRegisterSubmit,
  }
}
