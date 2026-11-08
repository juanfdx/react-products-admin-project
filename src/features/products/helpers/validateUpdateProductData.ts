import { updateProductSchema } from '../schemas/update-product.schema'
import { validateFormData } from './validateFormData'


export const validateUpdateProductData = (formData: FormData) => {
  return validateFormData(formData, updateProductSchema)
}