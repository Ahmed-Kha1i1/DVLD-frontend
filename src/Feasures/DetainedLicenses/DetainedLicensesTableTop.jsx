/* eslint-disable react/prop-types */
import { detainedLicensesSortItems } from "./DetainedLicensesConsts";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import SearchTable from "../../Core/ui/TableSearch";
import SortTable from "../../Core/ui/SortTable";
import SortDirectionTable from "../../Core/ui/SortDirectionTable";
import DetainedLicensesFilters from "./DetainedLicensesFilters";
import ClearButton from "../../Core/ui/ClearButton";
import FilterButton from "../../Core/ui/FilterButton";
import ReleaseButton from "./ReleaseButton";
import DetainButton from "./DetainButton";

function DetainedLicensesTableTop({ defaultFilters, onFilter }) {
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
      nationalNumber: "",
      isReleased: "",
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
      <div className="table-top">
        <div className="sort-bar">
          <SortTable
            items={detainedLicensesSortItems}
            onSort={onSort}
            defaultValue={formValues?.orderBy || "Id"}
          />
          <SortDirectionTable
            onChangeDirection={onChangeDirection}
            defaultValue={formValues?.orderDirection || "Asc"}
          />
        </div>
        <div className="detained-search-bar">
          <SearchTable
            onSearch={onSearch}
            defaultValue={formValues?.searchQuery || ""}
          />
          <div className="flex gap-6 sm:justify-end">
            <ReleaseButton />
            <DetainButton />
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-5 grid h-16 grid-cols-[1fr_auto_auto] gap-4"
      >
        <DetainedLicensesFilters control={control} onClear={onClear} />
      </form>
    </div>
  );
}

export default DetainedLicensesTableTop;
