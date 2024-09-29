/* eslint-disable react/prop-types */
import Search from "../../Core/ui/Search";
import Select from "./Select";
import PersonCard from "../People/PersonCard";
import usePerson, { usePersonByNationalNo } from "./usePerson";

function PersonInfoWithFilter() {
  const { isLoading, person } = usePerson(1023);
  const { person: personNo } = usePersonByNationalNo("N2");
  function onSearch(searchKey) {
    console.log(searchKey);
  }

  function onSelect(value) {
    console.log(value);
  }
  if (isLoading) return <h1>Loaning</h1>;
  console.log("is === ", person === personNo);

  return (
    <div>
      <div className="mb-10 flex">
        <Select
          options={["Person Id", "National Number"]}
          onSelect={onSelect}
        />
        <Search onSearch={onSearch} />
      </div>
      <PersonCard person={person} />
    </div>
  );
}

export default PersonInfoWithFilter;
