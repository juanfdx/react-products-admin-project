import { Link, useActionData } from 'react-router'
import { ProductForm } from '../components/ProductForm'
import type { createProductAction } from '../actions/createProductAction'


export const NewProductPage = () => {

  const actionData = useActionData<typeof createProductAction>()

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-black text-slate-700">New Product</h2>
        <Link 
          to="/" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded"
        >
          Back to Products {`->`}
        </Link>
      </div>

      <ProductForm errors={actionData?.errors} />
    </>
  )
}