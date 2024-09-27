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
        type="text"
        placeholder={placeholder}
        {...register(id, validation)}
      />
    </FormRow>
  );
}

export default TextInput;
