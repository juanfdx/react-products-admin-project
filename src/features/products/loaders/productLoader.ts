import axios from 'axios'
import type { LoaderFunctionArgs } from 'react-router'
import { getProductById } from '../services/productService'


export const productLoader = async ({ params }: LoaderFunctionArgs) => {

  const productId = Number(params.productId)

  if (!Number.isInteger(productId) || productId <= 0) {
    throw new Response('Invalid product ID.', { status: 400 })
  }

  try {
    const product = await getProductById(productId)
    return product

  } catch (error) {
    console.error('Error fetching product:', error)

    if (axios.isAxiosError(error)) {
      if (!error.response) {
        throw new Response(
          'The server is currently unavailable. Please try again later.',
          { status: 503 }
        )
      }

      throw new Response(
        error.response.status === 404
          ? 'Product not found.'
          : 'Unable to fetch product from the server.',
        { status: error.response.status }
      )
    }

    throw new Response('An unexpected error occurred.', {
      status: 500,
    })
  }
}