import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

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

  const onLoginSubmit: SubmitHandler<> = (data) => {}
  const onRegisterSubmit: SubmitHandler<> = async (data) => {}

  return {
    register,
    handleSubmit,
    onLoginSubmit,
    onRegisterSubmit,
  }
}
