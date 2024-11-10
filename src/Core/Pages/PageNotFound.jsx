import useMoveBack from "../Hooks/useMoveBack";
function PageNotFound() {
  const MoveBack = useMoveBack();
  return (
    <div className="flex h-[calc(100vh-30px)] flex-col items-center justify-center overflow-hidden bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-4 rounded-md border bg-gray-50 p-10">
        <p className="text-4xl font-bold">
          The page you are looking for could not be found
        </p>
        <button
          onClick={MoveBack}
          className="rounded-sm bg-secondary p-2 text-lg font-semibold text-white"
        >
          Move Back
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
