import FormRow from "./FormRow";

/* eslint-disable react/prop-types */
function DateInput({
  id,
  label,
  error,
  register,
  validation,
  isRequired,
  minDate,
  maxDate,
}) {
  return (
    <FormRow label={label} isRequired={isRequired} error={error}>
      <input
        id={id}
        type="date"
        min={minDate}
        max={maxDate}
        defaultValue={maxDate}
        {...register(id, validation)}
      />
    </FormRow>
  );
}

export default DateInput;
