import { z } from 'zod'


export const validateFormData = <T extends z.ZodType>(
  formData: FormData,
  schema: T
) => {
  const rawData = {
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    isActive: formData.get('isActive') === 'true',
    stock: formData.get('stock'),
  }

  const result = schema.safeParse(rawData)

  if (!result.success) {
    const errors: Record<string, string> = {}

    result.error.issues.forEach(issue => {
      const field = String(issue.path[0])

      if (!errors[field]) {
        errors[field] = issue.message
      }
    })

    return {
      isValid: false,
      errors,
      data: undefined,
    }
  }

  return {
    isValid: true,
    errors: {},
    data: result.data,
  }
}