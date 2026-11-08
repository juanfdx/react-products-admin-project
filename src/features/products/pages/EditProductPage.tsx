import { Link, useActionData, useLoaderData } from 'react-router'
import { ProductForm } from '../components/ProductForm'
import type { updateProductAction } from '../actions/updateProductAction'
import type { productLoader } from '../loaders/productLoader'


export const EditProductPage = () => {
  
  const product = useLoaderData<typeof productLoader>()
  const actionData = useActionData<typeof updateProductAction>()

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-black text-slate-700">Update Product</h2>
        <Link 
          to="/" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded"
        >
          Back to Products {`->`}
        </Link>
      </div>

      <ProductForm 
        product={product} 
        errors={actionData?.errors} 
      />
    </>
  )
}