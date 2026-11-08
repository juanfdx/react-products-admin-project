import { useState } from 'react'
import { Link, useFetcher } from 'react-router'
import { formatCurrency } from '../helpers/formats'
import type { ProductType } from '../schemas/product-response.schema'
import { Modal } from '../../../components/shared/Modal'

type Props = {
  product: ProductType
}

export const ProductItem = ({ product }: Props) => {
  // useFetcher() lets you execute an action without changing the current URL.
  const fetcher = useFetcher()
  const [showConfirm, setShowConfirm] = useState(false)


  
  return (
    <>
      <tr className="border-b">
        <td className="p-3 text-lg text-gray-800">
          {product.name}
        </td>

        <td className="p-3 text-lg text-gray-800 text-center">
          {formatCurrency(product.price)}
        </td>

        <td className="p-3 text-md text-gray-800 text-center">
          <fetcher.Form
            method="post"
            action={`/products/${product.id}/edit`}
          >
            <input
              type="hidden"
              name="isActive"
              value={product.isActive ? 'false' : 'true'}
            />

            <button
              type="submit"
              disabled={fetcher.state !== 'idle'}
              className={`font-bold py-1  rounded text-white w-35 ${
                product.isActive
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-gray-500 hover:bg-gray-600'
              }`}
            >
              {fetcher.state !== 'idle'
                ? 'Updating...'
                : product.isActive
                  ? 'Available'
                  : 'Unavailable'}
            </button>
          </fetcher.Form>
        </td>

        <td className="p-3 text-lg text-gray-800 text-center">
          {product.stock}
        </td>

        <td className="p-3 text-md text-gray-800 text-center">
          <div className="flex justify-center gap-2">
            <Link
              to={`/products/${product.id}/edit`}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded"
            >
              Edit
            </Link>

            <button
              type="button"
              onClick={() => setShowConfirm(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>

      {/* Confirmation Dialog */}
      {showConfirm && (
        <Modal
          productName={product.name}
          productId={product.id}
          onClose={() => setShowConfirm(false)}
        />
      )}
    </>
  )
}


/* ==============================================================================
 Why use createPortal?
  - Your ProductItem is rendered inside a <tbody>. 
    Rendering a regular <div> modal inside a table would produce invalid HTML.
  - createPortal allows you to render the modal directly inside document.body, 
    while keeping its React component logically inside ProductItem.
  - createPortal lets you render a component somewhere else in the DOM 
    while keeping it in the same React component tree.
============================================================================== */