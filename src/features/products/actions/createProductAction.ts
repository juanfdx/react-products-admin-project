import { validateProductData } from '../helpers/validateProductData'
import { createProduct } from '../services/productService'
import { redirect, type ActionFunctionArgs } from 'react-router'


export const createProductAction = async ({ request }: ActionFunctionArgs) => {

  const formData = await request.formData()
  const { isValid, errors, data} = validateProductData(formData)
  if (!isValid) return { errors }
  
  try {
    await createProduct(data!)
    return redirect('/')

  } catch (error) {
    console.error(error)

    return {
      errors: {
        general: 'Something went wrong!',
      },
    }

  }
}