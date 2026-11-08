import axios from 'axios'
import { getProducts } from '../services/productService'


export const productsLoader = async () => {

  try {
    const products = await getProducts()
    return { products }

  } catch (error) {
    console.error('Error fetching products:', error)

    if (axios.isAxiosError(error)) {
      // Backend is offline or unreachable
      if (!error.response) {
        throw new Response(
          'The server is currently unavailable. Please try again later.',
          { status: 503 }
        )
      }

      // Backend responded with an HTTP error
      throw new Response(
        'Unable to fetch products from the server.',
        { status: error.response.status }
      )
    }

    throw new Response('An unexpected error occurred.', {
      status: 500,
    })
  }
}