/* eslint-disable react/prop-types */
import Button from "./Button";

function SaveButton({
  disabled,
  className = "one-for-card-md",
  text = "Save",
}) {
  return (
    <Button
      disabled={disabled}
      text={text}
      styles={`bg-primary w-52  mx-auto px-11 justify-center ${className || ""}`}
    />
  );
}

export default SaveButton;
