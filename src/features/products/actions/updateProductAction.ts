import { redirect, type ActionFunctionArgs } from 'react-router'
import { updateProduct } from '../services/productService'
import { validateUpdateProductData } from '../helpers/validateUpdateProductData'


export const updateProductAction = async ({ request, params }: ActionFunctionArgs) => {

  const productId = Number(params.productId)

  if (!Number.isInteger(productId) || productId <= 0) {
    return {
      errors: {
        general: 'Invalid product ID',
      },
    }
  }

  const formData = await request.formData()
  
  try {
    // Check if ONLY isActive was submitted
    const fields = [...formData.keys()]

    if (fields.length === 1 && fields[0] === 'isActive') {
      const isActive = formData.get('isActive') === 'true'
      await updateProduct(productId, { isActive })
      return null
    }
    
    // NORMAL PRODUCT UPDATE
    const { isValid, errors, data } = validateUpdateProductData(formData)
    if (!isValid) return { errors }

    await updateProduct(productId, data!)
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