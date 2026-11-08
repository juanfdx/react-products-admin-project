import type z from 'zod'
import { createProductSchema } from './create-product.schema'

export const updateProductSchema = createProductSchema

export type UpdateProductType = z.infer<typeof updateProductSchema>



/* 
 I use patch for update because patch is a partial update,
.partial() makes every field optional while preserving its original validation rules.
*/