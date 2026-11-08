import { redirect, type ActionFunctionArgs } from 'react-router'
import { deleteProduct } from '../services/productService'


export const deleteProductAction = async ({ params }: ActionFunctionArgs) => {

  const productId = Number(params.productId)

  if (!Number.isInteger(productId) || productId <= 0) {
    return {
      errors: {
        general: 'Invalid product ID',
      },
    }
  }

  try {
    await deleteProduct(productId)
    return redirect('/')

  } catch (error) {
    console.error('Error deleting product:', error)

    return {
      error: 'Unable to delete product. Please try again.',
    }
  }
}