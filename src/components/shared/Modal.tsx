import { createPortal } from 'react-dom'
import { useFetcher } from 'react-router'


type Props = {
  productName: string
  productId: number
  onClose: () => void
}

export const Modal = ({ productName, productId, onClose,}: Props) => {

  const fetcher = useFetcher()
  const isDeleting = fetcher.state !== 'idle'


  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-modal-title"
        className="bg-white w-full max-w-md rounded-lg shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h3
          id="delete-modal-title"
          className="text-xl font-bold text-gray-800 mb-2"
        >
          Delete Product
        </h3>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete{' '}
          <span className="font-bold">{productName}</span>?
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isDeleting}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
          >
            Cancel
          </button>

          <fetcher.Form
            method="post"
            action={`/products/${productId}/delete`}
          >
            <button
              type="submit"
              disabled={isDeleting}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              {isDeleting ? 'Deleting...' : 'Yes, Delete'}
            </button>
          </fetcher.Form>
        </div>
      </div>
    </div>,
    document.body
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