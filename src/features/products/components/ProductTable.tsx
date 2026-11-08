import type { ProductType } from '../schemas/product-response.schema'
import { ProductItem } from './ProductItem'

type Props = {
  products: ProductType[]
}

export const ProductTable = ({ products }: Props) => {
  return (
    <div className="p-2">
      <table className="w-full mt-5 table-auto">
        <thead className="bg-slate-800 text-white">
            <tr>
                <th className="p-2">Product</th>
                <th className="p-2">Price</th>
                <th className="p-2">Available</th>
                <th className="p-2">Stock</th>
                <th className="p-2">Actions</th>
            </tr>
        </thead>
        <tbody>
          {products.map((product) => (
              <ProductItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  )
}