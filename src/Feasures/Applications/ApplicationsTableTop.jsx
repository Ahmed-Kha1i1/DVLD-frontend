/* eslint-disable react/prop-types */
import { applicationsSortItems } from "./ApplicationsConsts";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import SearchTable from "../../Core/ui/TableSearch";
import SortTable from "../../Core/ui/SortTable";
import SortDirectionTable from "../../Core/ui/SortDirectionTable";
import AddButton from "../../Core/ui/AddButton";
import ApplicationsFilters from "./ApplicationsFilters";

function ApplicationsTableTop({ defaultFilters, onFilter }) {
  const [_, setSearchParams] = useSearchParams();

  const { setValue, handleSubmit, getValues, control, reset, watch } = useForm({
    defaultValues: defaultFilters,
  });

  const formValues = watch();

  function UpdateParams(values) {
    const filteredParams = {};
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        filteredParams[key] = values[key];
      }
    });
    setSearchParams(filteredParams);
  }
  function onSubmit(values) {
    UpdateParams(values);
    onFilter(values);
  }

  function onClear() {
    reset({
      id: "",
      className: "",
      personId: "",
      nationalNumber: "",
      status: "",
      orderBy: "",
      orderDirection: "",
      searchQuery: "",
    });
  }

  function updateParamsWithFilter() {
    var values = getValues();
    UpdateParams(values);
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
    <div className="">
      <div className="table-top">
        <div className="sort-bar">
          <SortTable
            items={applicationsSortItems}
            onSort={onSort}
            defaultValue={formValues?.orderBy || "Id"}
          />
          <SortDirectionTable
            onChangeDirection={onChangeDirection}
            defaultValue={formValues?.orderDirection || "Asc"}
          />
        </div>
        <div className="search-bar">
          <SearchTable
            onSearch={onSearch}
            defaultValue={formValues?.searchQuery || ""}
          />
          <AddButton to="add-new" />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-5 h-16 gap-4">
        <ApplicationsFilters control={control} onClear={onClear} />
      </form>
    </div>
  );
}

export default ApplicationsTableTop;