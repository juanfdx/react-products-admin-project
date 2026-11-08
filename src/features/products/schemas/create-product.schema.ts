import { z } from 'zod'


export const createProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Product name is required')
    .max(150, 'Name cannot exceed 150 characters'),

  description: z.preprocess(
    (value) => value === null || value === '' ? null : value,
    z.string().nullable()
  ),

  price: z.preprocess(
      (value) => (value === '' ? undefined : Number(value)),
      z.number({
        error: (issue) =>
          issue.input === undefined
            ? "Price is required"
            : "Price must be a number",
      })
        .nonnegative('Price must be 0 or greater')
        .max(1000000, 'Price cannot exceed 1,000,000')
    ),
    
  isActive: z.preprocess(
    (value) => value === null ? false : value === 'true' ? true : value,
    z.boolean()
  ),

  stock: z.preprocess(
    (value) => value === '' ? undefined : Number(value),
    z.number({
      error: (issue) =>
        issue.input === undefined
          ? "Stock is required"
          : "Stock must be a number",
    })
      .nonnegative('Stock must be 0 or greater')
      .max(1000000, 'Stock cannot exceed 1,000,000')
  ),

})

export type CreateProductType = z.output<typeof createProductSchema>
