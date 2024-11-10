/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { persondetailTypes } from "./peopleKeys";
import {
  validateIdRule,
  validateNameRule,
} from "../../Core/Utils/validationRules";
import Filter from "../../Core/ui/Filter";
import Spinner from "../../Core/ui/Spinner";
import PersonCard from "./PersonCard";
import usePerson from "./usePerson";
import Error from "../../Core/ui/Error";

const PersonFilterOptions = [
  {
    optionText: "Person Id",
    optionValue: persondetailTypes.ID,
    validationRules: validateIdRule("Person id"),
  },
  {
    optionText: "National number",
    optionValue: persondetailTypes.NATIONAL_NUMBER,
    validationRules: validateNameRule("National number"),
  },
];

function PersonInfoWithFilter({
  onSelectPerson,
  typeRef,
  valueRef,
  isEditSession = false,
  OnAddSeccuss,
}) {
  const [currentType, setCurrentType] = useState(typeRef.current);
  const [currentValue, setCurrentValue] = useState(valueRef.current);
  const { isLoading, error, person } = usePerson(currentValue, currentType, 1);

  function onSearch(optionType, value) {
    valueRef.current = value;
    typeRef.current = optionType;

    setCurrentValue(value);
    setCurrentType(optionType);
  }

  useEffect(() => {
    onSelectPerson(person?.personID);
  }, [person]);

  if (error) return <Error message={error?.message} />;

  return (
    <div className="space-y-14">
      <Filter
        onSearch={onSearch}
        options={PersonFilterOptions}
        defaultOption={PersonFilterOptions.find(
          (option) => option.optionValue === typeRef.current,
        )}
        defaultValue={valueRef.current}
        isEditSession={isEditSession}
        OnAddSeccuss={(personId) => {
          OnAddSeccuss(personId);
          setCurrentType(persondetailTypes.ID);
          setCurrentValue(personId);
        }}
      />
      {isLoading ? <Spinner /> : <PersonCard person={person} />}
    </div>
  );
}

export default PersonInfoWithFilter;
