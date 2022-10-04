export const useSignUpForm = () => {
  const formInitialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const submitHandler = () => {}

  return { formInitialValues, submitHandler }
}
