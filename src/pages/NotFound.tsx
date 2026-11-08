import { Link } from 'react-router'


export const NotFound = () => {

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-200 px-4 py-12">

      <div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center">

        {/* 404 Text */}
        <h1 className="text-[80px] leading-none font-extrabold text-indigo-600 mb-4">
          404
        </h1>

        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-600 leading-6 mb-8">
          Oops! The page you're looking for doesn't exist,
          may have been moved, or is temporarily unavailable.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">

          <Link
            to="/"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-3 rounded transition-colors"
          >
            Back to Products
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold p-3 rounded transition-colors cursor-pointer"
          >
            Go Back
          </button>

        </div>

      </div>
    </div>
  )
}
