import FormRow from "./FormRow";

import useSelector from "../Hooks/useSelector";
import SelectorMenu from "./SelectorMenu";
import SelectorInput from "./SelectorInput";
import { dispatchInputEvent } from "../Utils/helpers";
import { defaultEuqal } from "../Utils/FilterUtils";

/* eslint-disable react/prop-types */
function Selector({
  id,
  label,
  error,
  register,
  Onfilter,
  renderOption,
  options = [],
  isRequired = true,
  defaultOption = "",
  onEqual = defaultEuqal,
}) {
  const {
    inputValue,
    registeRest,
    inputRef,
    ref,
    isMenuVisable,
    filteredOptions,
    generateRef,
    onChange,
  } = useSelector({
    options,
    register,
    Onfilter,
    defaultOption,
    onEqual,
  });

  function OnSelect(e) {
    dispatchInputEvent(inputRef.current, e.target.value);
  }

  return (
    <FormRow label={label} isRequired={isRequired} error={error}>
      <SelectorInput
        id={id}
        value={inputValue}
        generateRef={generateRef}
        onChange={onChange}
        {...registeRest}
      />
      <div className="relative z-10">
        {isMenuVisable && (
          <SelectorMenu
            options={filteredOptions}
            OnSelect={OnSelect}
            referance={ref}
            renderOption={renderOption}
          />
        )}
      </div>
    </FormRow>
  );
}
export default Selector;
