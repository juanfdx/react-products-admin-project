import { createProductSchema } from '../schemas/create-product.schema'
import { validateFormData } from './validateFormData'


export const validateProductData = (formData: FormData) => {
  return validateFormData(formData, createProductSchema)
}