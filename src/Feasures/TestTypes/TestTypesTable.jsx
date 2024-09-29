import { useState } from "react";
import Error from "../../Core/ui/Error";
import Spiner from "../../Core/ui/Spiner";
import useTestTypes from "./useTestTypes";
import ContextMenu from "../../Core/ui/ContextMenu";
import Table from "../../Core/ui/Table";
import TestTypeRow from "./TestTypeRow";
import TestTypeContextMenu from "./TestTypeContextMenu";
function TestTypesTable() {
  const { isLoading, error, TestTypes } = useTestTypes();
  const [selectedTestType, setSelectedTestType] = useState(null);
  const columns = "grid-cols-[0.2fr_0.5fr_2fr_0.5fr]";

  if (isLoading) return <Spiner />;

  if (error) return <Error message={error?.message} />;

  return (
    <Table columns={columns}>
      <Table.Header>
        <div>Id</div>
        <div>Title</div>
        <div>Description</div>
        <div>Fees</div>
      </Table.Header>
      <ContextMenu>
        <Table.Body
          items={TestTypes}
          render={(TestType, IsDark) => (
            <ContextMenu.Row
              id={TestType.testTypeID}
              key={TestType.testTypeID}
              action={() => {
                setSelectedTestType(TestType);
              }}
            >
              <Table.Row isDark={IsDark} id={TestType.testTypeID}>
                <TestTypeRow TestType={TestType} />
              </Table.Row>
            </ContextMenu.Row>
          )}
        />
        <ContextMenu.Menu>
          <TestTypeContextMenu
            selectedTestTypeId={selectedTestType?.testTypeID}
            key={selectedTestType?.testTypeID}
          />
        </ContextMenu.Menu>
      </ContextMenu>
    </Table>
  );
}

export default TestTypesTable;
