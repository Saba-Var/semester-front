import type { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form'

export type InputErrorMessageProps = {
  errorMessage: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}
