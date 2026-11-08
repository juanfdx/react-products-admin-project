import { Link, useLoaderData } from 'react-router'
import type { productsLoader } from '../loaders/productsLoader'
import { ProductTable } from '../components/ProductTable'


export const ProductsPage = () => {

  const { products } = useLoaderData<typeof productsLoader>()


  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-black text-slate-700">Products</h2>
        <Link 
          to="/products/new" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded"
        >
          Add Product
        </Link>
      </div>

      <ProductTable products={products} />
    </>
  )
}