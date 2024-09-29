/* eslint-disable react/prop-types */
import { MdErrorOutline } from "react-icons/md";
import Button from "./Button";
import { useState } from "react";

function ConfirmDelete({ text, id, isDeleting, onDelete }) {
  const checkKey = `${text}/${id}`;
  const [checkInput, setCheckInput] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    onDelete(id);
  }

  return (
    <div className="text-center">
      <MdErrorOutline className="mx-auto mb-2 h-16 w-16 rounded-full border-4 border-red-100 bg-red-200 p-1 text-4xl text-red-500" />
      <h3 className="mb-3 capitalize">Delete {text}</h3>
      <div className="mb-14 text-lg">
        <p>Are you sure you want to delete this {text}?</p>
        <p>This action cannot be undone.</p>
      </div>

      <form
        className="flex flex-col items-start gap-6 pt-10"
        onSubmit={handleSubmit}
      >
        <p className="text-xl font-semibold">
          To confirm, type "
          <span className="text-bold text-primary">{checkKey}</span>" in the box
          below
        </p>
        <input
          type="text"
          className="w-[600px] max-w-full rounded-md border-2 border-red-700 px-4 py-2 text-lg caret-primary focus:border-secondary focus:outline-none"
          onChange={(e) => setCheckInput(e.target.value)}
          required
        />
        <Button
          text={`${isDeleting ? "Deleting..." : "Delete"}`}
          bgColor="red-500"
          textColor="white"
          styles="justify-center w-full"
          disabled={checkKey != checkInput || isDeleting}
        />
      </form>
    </div>
  );
}

export default ConfirmDelete;
