import useApplicationTypes from "./useApplicationTypes";
import Spinner from "../../Core/ui/Spinner";
import Error from "../../Core/ui/Error";
import Table from "../../Core/ui/Table";
import Model from "../../Core/ui/Model";
import ApplicationTypeRow from "./ApplicationTypeRow";
import EditApplicationType from "./EditApplicationType";
import { useState } from "react";

function ApplicationTypesTable() {
  const { isLoading, error, ApplicationTypes } = useApplicationTypes();
  const [selectedApplicationType, setSelectedApplicationType] = useState(null);
  const columns = "grid-cols-[0.2fr_1fr_1fr_0.2fr]";

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <>
      <Table columns={columns}>
        <Table.Header>
          <div>Id</div>
          <div>Title</div>
          <div>Fees</div>
        </Table.Header>
        <Model>
          <Table.Body
            items={ApplicationTypes}
            render={(ApplicationType, IsDark) => (
              <Table.Row
                isDark={IsDark}
                id={ApplicationType.id}
                key={ApplicationType.id}
              >
                <ApplicationTypeRow
                  ApplicationType={ApplicationType}
                  setSelectedApplicationType={setSelectedApplicationType}
                />
              </Table.Row>
            )}
          />
          <Model.Window name="edit-Application-type">
            <EditApplicationType applicationType={selectedApplicationType} />
          </Model.Window>
        </Model>
      </Table>
    </>
  );
}

export default ApplicationTypesTable;
