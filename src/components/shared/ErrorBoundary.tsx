
import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from 'react-router'

export default function RouteErrorBoundary() {
  const error = useRouteError()
  const navigate = useNavigate()

  let title = 'Something went wrong'
  let message = 'An unexpected error occurred. Please try again.'

  if (isRouteErrorResponse(error)) {
    if (error.status === 503) {
      title = 'Server unavailable'
      message =
        'We cannot connect to the server. Please make sure the backend is running and try again.'
    } else {
      title = `Error ${error.status}`
      message =
        typeof error.data === 'string'
          ? error.data
          : error.statusText || message
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-200 px-4 py-12">

      <div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center">

        {/* Error Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m0 3.75h.008M10.29 3.86l-8.1 14.03A2 2 0 003.92 21h16.16a2 2 0 001.73-3.11l-8.1-14.03a2 2 0 00-3.46 0z"
            />
          </svg>
        </div>

        {/* Error Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          {title}
        </h1>

        {/* Error Message */}
        <p className="text-gray-600 leading-6 mb-8">
          {message}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">

          <button
            onClick={() => window.location.reload()}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-3 rounded transition-colors cursor-pointer"
          >
            Try Again
          </button>

          <button
            onClick={() => navigate('/')}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold p-3 rounded transition-colors cursor-pointer"
          >
            Go Home
          </button>

        </div>

      </div>
    </div>
  )
}
