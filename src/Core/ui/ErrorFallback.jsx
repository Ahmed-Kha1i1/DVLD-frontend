/* eslint-disable react/prop-types */
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex h-[calc(100vh-30px)] flex-col items-center justify-center overflow-hidden bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-4 rounded-md border bg-gray-50 p-10">
        <h2 className="text-black">Something went wrong</h2>
        <p className="text-xl text-gray-700">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="rounded-sm bg-secondary p-2 text-lg font-semibold text-white"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
