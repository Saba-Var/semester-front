import { useForm, FormProvider } from 'react-hook-form'
import { useEffect } from 'react'

type StoryInputTemplateProps = {
  generateError?: boolean
  children: JSX.Element
  inputName?: string
}

const StoryFormTemplate: React.FC<StoryInputTemplateProps> = ({
  generateError,
  inputName,
  children,
}) => {
  const form = useForm()

  useEffect(() => {
    if (generateError && inputName) {
      form.setError(inputName, {
        type: 'manual',
        message: 'This is a manual error',
      })
    }
  }, [form, generateError, inputName])

  return (
    <FormProvider {...form}>
      <form>
        <>{children}</>
      </form>
    </FormProvider>
  )
}

export default StoryFormTemplate
