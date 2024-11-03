/* eslint-disable react/prop-types */
import Button from "./Button";

function SaveButton({ disabled }) {
  return (
    <Button
      disabled={disabled}
      text="Save"
      styles="bg-primary w-52 col-span-2 mx-auto px-11 justify-center"
    />
  );
}

export default SaveButton;
