import { createBrowserRouter } from 'react-router'
// LAYOUTS
import { MainLayout } from '../layouts/MainLayout'
// PRODUCT PAGES
import { ProductsPage } from '../features/products/pages/ProductsPage'
import { NewProductPage } from '../features/products/pages/NewProductPage'
import { EditProductPage } from '../features/products/pages/EditProductPage'
// PAGES
import { NotFound } from '../pages/NotFound'
// LOADERS
import { productsLoader } from '../features/products/loaders/productsLoader'
import { productLoader } from '../features/products/loaders/productLoader'
// ACTIONS
import { createProductAction } from '../features/products/actions/createProductAction'
import { updateProductAction } from '../features/products/actions/updateProductAction'
import { deleteProductAction } from '../features/products/actions/deleteProductAction'
// COMPONENTS
import { LoadingFallback } from '../components/shared/LoadingFallback'
import RouteErrorBoundary from '../components/shared/ErrorBoundary'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RouteErrorBoundary />,
    HydrateFallback: LoadingFallback,
    children: [
      {
        index: true,
        element: <ProductsPage />,
        loader: productsLoader
      },
      {
        path: 'products/new',
        element: <NewProductPage />,
        action: createProductAction
      },
      {
        path: 'products/:productId/edit',
        element: <EditProductPage />,
        loader: productLoader,
        action: updateProductAction
      },
      {
        path: 'products/:productId/delete',
        action: deleteProductAction,
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
