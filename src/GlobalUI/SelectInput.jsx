/* eslint-disable react/prop-types */
import FormRow from "./FormRow";

function SelectInput({
  id,
  label,
  error,
  register,
  validation,
  options,
  isRequired,
}) {
  return (
    <FormRow label={label} isRequired={isRequired} error={error}>
      <select id={id} {...register(id, validation)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FormRow>
  );
}

export default SelectInput;
