
export const LoadingFallback = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />

        <h2 className="text-lg font-bold text-gray-800">
          Loading products...
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Please wait a moment.
        </p>
      </div>
    </div>
  )
}
