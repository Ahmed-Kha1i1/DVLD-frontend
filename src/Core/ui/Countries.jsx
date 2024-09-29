/* eslint-disable react/prop-types */
import useCountries from "../Hooks/useCountries";
import { defaultFilter } from "../Utils/FilterUtils";
import { validateCountryRule } from "../Utils/validationRules";
import Selector from "./Selector";

function onEqual(option, value) {
  return option.countryName.toLowerCase() === value.toLowerCase();
}

function Countries({ register, error, defaultCountry = "" }) {
  const { isLoading, Countries } = useCountries();

  if (isLoading) return null;

  return (
    <Selector
      options={Countries.data}
      isLoading={isLoading}
      error={error}
      isRequired={true}
      defaultOption={defaultCountry}
      id="nationalityCountry"
      label="Country"
      onEqual={onEqual}
      register={() =>
        register("nationalityCountry", validateCountryRule(Countries.data))
      }
      renderOption={(option, isSelected) => (
        <option
          key={option.countryID}
          value={option.countryName}
          className={`${isSelected ? "selected" : ""}`}
        >
          {option.countryName}
        </option>
      )}
      Onfilter={(option, value) => defaultFilter(option.countryName, value)}
    />
  );
}

export default Countries;
