/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useState } from "react";
import Select from "./Select";
import SearchForm from "./SearchForm";
import SearchInput from "./SearchInput";
import Model from "../ui/Model";
import AddNewPerson from "../Pages/AddNewPerson";
import EditPersonWindow from "../../Feasures/People/EditPersonWindow";
import EditButton from "./EditButton";
import AddButton from "./AddButton";
/*
structure
[
  {
    optionText,
    optionValue,
    validationRules,
    options     (optional) if exists mean that this type need selector not search box
  }
]
*/

function Filter({
  onSearch,
  options,
  defaultOption,
  defaultValue,
  isEditSession,
  OnAddSeccuss,
}) {
  const [currentOption, setCurrentOption] = useState(defaultOption);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleSelect(value) {
    setCurrentOption(options.find((option) => option.optionValue === value));
  }

  function handleSearch(values) {
    onSearch(currentOption.optionValue, values.searchKey);
  }
  function handleAddSuccess(newPersonId) {
    OnAddSeccuss(newPersonId);
    Model.closeWindow();
  }
  return (
    <div className="flex items-start justify-between">
      <div className={`mb-10 flex ${isEditSession && "disabled"}`}>
        <Select
          options={options}
          onSelect={handleSelect}
          defaultValue={currentOption.optionValue}
        />
        <SearchForm onSearch={handleSubmit(handleSearch)}>
          <SearchInput
            defaultValue={defaultValue}
            error={errors?.searchKey?.message}
            registerResult={register(
              "searchKey",
              currentOption.validationRules,
            )}
          />
        </SearchForm>
      </div>
      <Model>
        <Model.Open
          opens="add-person"
          render={(open) =>
            isEditSession ? (
              <EditButton onClick={open} />
            ) : (
              <AddButton onClick={open} />
            )
          }
        />
        <Model.Window name="add-person" className="items-start">
          {isEditSession ? (
            <EditPersonWindow navigate={false} personId={defaultValue} />
          ) : (
            <AddNewPerson onAddSuccess={handleAddSuccess} />
          )}
        </Model.Window>
      </Model>
    </div>
  );
}

export default Filter;
