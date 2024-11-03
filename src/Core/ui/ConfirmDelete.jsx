/* eslint-disable react/prop-types */
import { MdErrorOutline } from "react-icons/md";
import Button from "./Button";
import { useState } from "react";
import Confirm from "./Confirm";

function ConfirmDelete({
  text,
  id,
  isDeleting,
  onDelete,
  shouldConferm = true,
}) {
  const checkKey = `${text}/${id}`;
  const [checkInput, setCheckInput] = useState(null);

  return (
    <Confirm
      Icon={
        <MdErrorOutline className="h-16 w-16 rounded-full border-4 border-red-100 bg-red-200 text-4xl text-red-500" />
      }
      title={`Delete ${text}`}
      paragraph={
        <>
          <p>Are you sure you want to delete this {text}?</p>
          <p>This action cannot be undone.</p>
        </>
      }
      onClick={() => {
        onDelete();
      }}
    >
      {shouldConferm && (
        <>
          <p className="text-xl font-semibold">
            To confirm, type "
            <span className="text-bold text-primary">{checkKey}</span>" in the
            box below
          </p>

          <input
            type="text"
            className="w-[600px] max-w-full rounded-md border-2 border-red-700 px-4 py-2 text-lg caret-primary focus:border-secondary focus:outline-none"
            onChange={(e) => setCheckInput(e.target.value)}
            required
          />
        </>
      )}
      <Button
        text={`${isDeleting ? "Deleting..." : "Delete"}`}
        bgColor="red-500"
        textColor="white"
        styles="justify-center w-full"
        disabled={(shouldConferm && checkKey != checkInput) || isDeleting}
      />
    </Confirm>
  );
}

export default ConfirmDelete;
