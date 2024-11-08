/* eslint-disable react/prop-types */
import { driversSortItems } from "./DriversConsts";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import SearchTable from "../../Core/ui/TableSearch";
import SortTable from "../../Core/ui/SortTable";
import ClearButton from "../../Core/ui/ClearButton";
import FilterButton from "../../Core/ui/FilterButton";
import SortDirectionTable from "../../Core/ui/SortDirectionTable";
import DriversFilters from "./DriversFilters";

function DriversTableTop({ defaultFilters, onFilter }) {
  const [_, setSearchParams] = useSearchParams();

  const { setValue, handleSubmit, getValues, control, reset, watch } = useForm({
    defaultValues: defaultFilters,
  });

  const formValues = watch();

  function updateParams(values) {
    const filteredParams = {};
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        filteredParams[key] = values[key];
      }
    });
    setSearchParams(filteredParams);
  }

  function onSubmit(values) {
    updateParams(values);
    onFilter(values);
  }

  function onClear() {
    reset({
      id: "",
      personId: "",
      nationalNumber: "",
      orderBy: "",
      orderDirection: "",
      searchQuery: "",
    });
  }

  function updateParamsWithFilter() {
    const values = getValues();
    updateParams(values);
    onFilter(values);
  }

  function onSort(value) {
    setValue("orderBy", value);
    updateParamsWithFilter();
  }

  function onChangeDirection(direction) {
    setValue("orderDirection", direction);
    updateParamsWithFilter();
  }

  function onSearch(value) {
    setValue("searchQuery", value);
    updateParamsWithFilter();
  }

  return (
    <div>
      <div className="mb-5 grid h-16 grid-cols-[auto_auto_1fr] gap-6">
        <SortTable
          items={driversSortItems}
          onSort={onSort}
          defaultValue={formValues?.orderBy || "Id"}
        />
        <SortDirectionTable
          onChangeDirection={onChangeDirection}
          defaultValue={formValues?.orderDirection || "Asc"}
        />
        <SearchTable
          onSearch={onSearch}
          defaultValue={formValues?.searchQuery || ""}
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-5 grid h-16 grid-cols-[1fr_auto_auto] gap-4"
      >
        <DriversFilters control={control} />
        <ClearButton onClear={onClear} />
        <FilterButton />
      </form>
    </div>
  );
}

export default DriversTableTop;
