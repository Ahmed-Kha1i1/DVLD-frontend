import { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";

function useSelector({
  options,
  register,
  Onfilter,
  onEqual,
  defaultOption = "",
}) {
  const [inputValue, setInputValue] = useState(defaultOption);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isMenuVisable, setMenuVisibility] = useState(false);

  const ref = useOutsideClick(() => setMenuVisibility(false));
  const inputRef = useRef();

  const {
    ref: regRef,
    onChange: registerOnChange,
    ...registeRest
  } = register();

  function handleInputChange(e) {
    const value = e.target.value;

    setInputValue(value);

    if (!value) {
      setMenuVisibility(false);
      return;
    }

    const filtered = options.filter((option) => Onfilter(option, value));

    if (filtered.length === 0) {
      setMenuVisibility(false);
      return;
    }

    if (filtered.length > 1) {
      ShowMneu(filtered);
      return;
    }

    if (onEqual(filtered[0], value)) {
      setMenuVisibility(false);
      setFilteredOptions(filtered);
    } else {
      ShowMneu(filtered);
    }
  }

  function ShowMneu(filtered) {
    setMenuVisibility(true);
    setFilteredOptions(filtered);
  }
  function generateRef(e) {
    inputRef.current = e; // Store the ref locally
    regRef(e); // Register input ref with react-hook-form
  }
  function onChange(e) {
    handleInputChange(e);
    registerOnChange(e);
  }
  return {
    inputValue,
    registeRest,
    inputRef,
    ref,
    isMenuVisable,
    filteredOptions,
    generateRef,
    onChange,
  };
}

export default useSelector;
