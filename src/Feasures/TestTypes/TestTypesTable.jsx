import { useState } from "react";
import Error from "../../GlobalUI/Error";
import Spiner from "../../GlobalUI/Spiner";
import useTestTypes from "./useTestTypes";
import ContextMenu from "../../GlobalUI/ContextMenu";
import Table from "../../GlobalUI/Table";
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
          render={(TestType) => (
            <ContextMenu.Row
              id={TestType.testTypeID}
              key={TestType.testTypeID}
              action={() => {
                setSelectedTestType(TestType);
              }}
            >
              <TestTypeRow TestType={TestType} columns={columns} />
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
