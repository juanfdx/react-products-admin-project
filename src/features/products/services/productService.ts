import z from 'zod'
import api from '../../../lib/axios'
// schemas
import { apiSuccessSchema } from '../schemas/api-response.schema'
import { productResponseSchema, productsResponseSchema, type ProductType } from '../schemas/product-response.schema'
import type { CreateProductType } from '../schemas/create-product.schema'


// CREATE PRODUCT
export const createProduct = async (data: CreateProductType) => {
  const response = await api.post<unknown>('/products', data)
  const schema = apiSuccessSchema(productResponseSchema)

  return schema.parse(response.data).data
}

// GET ALL PRODUCTS
export const getProducts = async () => {
  const response = await api.get<unknown>('/products')
  const schema = apiSuccessSchema(productsResponseSchema)

  return schema.parse(response.data).data
}

// GET PRODUCT BY ID
export const getProductById = async (id: number) => {
  const response = await api.get<unknown>(`/products/${id}`)
  const schema = apiSuccessSchema(productResponseSchema)

  return schema.parse(response.data).data
}

// UPDATE PRODUCT
export const updateProduct = async (id: number, data: Partial<ProductType>) => {
  const response = await api.patch<unknown>(`/products/${id}`, data)
  const schema = apiSuccessSchema(productResponseSchema)

  return schema.parse(response.data).data
}

// DELETE PRODUCT
export const deleteProduct = async (id: number) => {
  const response = await api.delete<unknown>(`/products/${id}`)
  const schema = apiSuccessSchema(z.null())

  return schema.parse(response.data)
}