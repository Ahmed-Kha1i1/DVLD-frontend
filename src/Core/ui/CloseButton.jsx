/* eslint-disable react/prop-types */
import Button from "./Button";

export default function CloseButton({ disabled, onClose }) {
  return (
    <Button
      disabled={disabled}
      text="Close"
      styles={`bg-secondary w-52 col-span-2 mx-auto px-11 justify-center`}
      onClick={onClose}
    />
  );
}
