import { Form } from 'react-router'
import type { ProductType } from '../schemas/product-response.schema'

type FormErrors = {
  name?: string
  price?: string
  description?: string
  stock?: string
  general?: string
}

type Props = {
  product?: ProductType
  errors?: FormErrors
}


export const ProductForm = ({ product, errors }: Props) => {

  const isEditing = Boolean(product)

  return (
    <Form method={isEditing ? 'patch' : 'post'} className="mt-10">
      {/* General Error */}
      {errors?.general && (
        <p className="mb-4 text-white text-center text-xl font-bold bg-red-500 p-2">
          {errors.general}
        </p>
      )}

      {/* Product Name */}
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="name">
          Product Name: <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          defaultValue={product?.name ?? ''}
          className="mt-2 block w-full p-3 bg-gray-50 border border-gray-200"
          placeholder="Name of the product..."
          autoComplete='on'
        />
        <div className="relative h-5">
          {errors?.name && (
            <p className="absolute top-0.5 left-1 text-[15px] text-red-500">{errors.name}</p>
          )}
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="price">
          Price: <span className="text-red-500">*</span>
        </label>
        <input
          id="price"
          name="price"
          type="number"
          min="0"
          step="0.01"
          defaultValue={product ? product.price / 100 : ''}
          className="mt-2 block w-full p-3 bg-gray-50 border border-gray-200"
          placeholder="Product Price. eg. 200, 350.53"
        />
        <div className="relative h-5">
          {errors?.price && (
            <p className="absolute top-0.5 left-1 text-[15px] text-red-500">{errors.price}</p>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="description">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          defaultValue={product?.description ?? ''}
          className="mt-2 block w-full p-3 bg-gray-50 border border-gray-200"
          placeholder="Describe the product..."
        />
        <div className="relative h-5">
          {errors?.description && (
            <p className="absolute top-0.5 left-1 text-[15px] text-red-500">{errors.description}</p>
         )}
        </div>
      </div>

      {/* Stock */}
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="stock">
          Stock:
        </label>
        <input
          id="stock"
          name="stock"
          type="number"
          min="0"
          defaultValue={product?.stock ?? 0}
          placeholder="eg. 100"
          className="mt-2 block w-full p-3 bg-gray-50 border border-gray-200"
        />
        <div className="relative h-5">
          {errors?.stock && (
            <p className="absolute top-0.5 left-1 text-[15px] text-red-500">{errors.stock}</p>
         )}
        </div>
      </div>

      {/* Is Active */}
      <div className="mb-4 flex items-center gap-3">
        <input
          id="isActive"
          name="isActive"
          type="checkbox"
          value="true"
          defaultChecked={product?.isActive ?? true}
          className="h-4 w-4 accent-indigo-600"
        />
        <label className="text-gray-800" htmlFor="isActive">
          Active Product
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
      >
        {isEditing ? 'Update Product' : 'Add Product'}
      </button>
    </Form>
  )
}
