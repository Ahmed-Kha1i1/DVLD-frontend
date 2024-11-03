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
  isTextArea = false,
  className,
}) {
  console.log(error);
  return (
    <FormRow
      label={label}
      isRequired={isRequired}
      error={error}
      className={className}
    >
      {isTextArea ? (
        <textarea
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, validation)}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, validation)}
        />
      )}
    </FormRow>
  );
}

export default TextInput;
