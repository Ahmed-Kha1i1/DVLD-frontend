/* eslint-disable react/prop-types */
import FormRow from "./FormRow";

function TextInput({
  id,
  label,
  error,
  register,
  validation,
  placeholder,
  isRequired,
  type = "text",
  className,
}) {
  return (
    <FormRow
      label={label}
      isRequired={isRequired}
      error={error}
      className={className}
    >
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, validation)}
      />
    </FormRow>
  );
}

export default TextInput;
