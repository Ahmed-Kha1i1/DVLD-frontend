import { useState } from "react";
import Error from "../../Core/ui/Error";
import Spinner from "../../Core/ui/Spinner";
import useTestTypes from "./useTestTypes";
import Table from "../../Core/ui/Table";
import Model from "../../Core/ui/Model";
import TestTypeRow from "./TestTypeRow";
import EditTestType from "./EditTestType";
function TestTypesTable() {
  const { isLoading, error, TestTypes } = useTestTypes();
  const [selectedTestType, setSelectedTestType] = useState(null);
  const columns = "grid-cols-[0.2fr_0.5fr_2fr_0.5fr_0.5fr]";

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <Table columns={columns}>
      <Table.Header>
        <div>Id</div>
        <div>Title</div>
        <div>Description</div>
        <div>Fees</div>
      </Table.Header>
      <Model>
        <Table.Body
          items={TestTypes}
          render={(TestType, IsDark) => (
            <Table.Row isDark={IsDark} id={TestType.id} key={TestType.id}>
              <TestTypeRow
                TestType={TestType}
                setSelectedTestType={setSelectedTestType}
              />
            </Table.Row>
          )}
        />
        <Model.Window name="edit-test-type">
          <EditTestType testType={selectedTestType} />
        </Model.Window>
      </Model>
    </Table>
  );
}

export default TestTypesTable;
