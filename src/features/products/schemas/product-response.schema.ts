import { z } from 'zod'


export const productResponseSchema = z.object({
  
  id: z.number(),

  name: z.string(),

  description: z.string().nullable(),

  // Stored in cents by your backend
  price: z.number().int().nonnegative(),

  stock: z.number().int().nonnegative(),

  isActive: z.boolean(),

  createdAt: z.iso.datetime(),

  updatedAt: z.iso.datetime(),
})

export const productsResponseSchema = z.array(
  productResponseSchema
)

export type ProductType = z.infer<typeof productResponseSchema>