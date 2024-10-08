import { useState } from "react";
import useApplicationTypes from "./useApplicationTypes";
import ApplicationTypeContextMenu from "./ApplicationTypeContextMenu";
import Spinner from "../../Core/ui/Spinner";
import Error from "../../Core/ui/Error";
import Table from "../../Core/ui/Table";
import ContextMenu from "../../Core/ui/ContextMenu";
import ApplicationTypeRow from "./ApplicationTypeRow";

function ApplicationTypesTable() {
  const { isLoading, error, ApplicationTypes } = useApplicationTypes();
  const [selectedApplicationType, setSelectedApplicationType] = useState(null);
  const columns = "grid-cols-[0.2fr_1.2fr_1fr]";

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <Table columns={columns}>
      <Table.Header>
        <div>Id</div>
        <div>Title</div>
        <div>Fees</div>
      </Table.Header>
      <ContextMenu>
        <Table.Body
          items={ApplicationTypes}
          render={(ApplicationType, IsDark) => (
            <ContextMenu.Row
              id={ApplicationType.applicationTypeID}
              key={ApplicationType.applicationTypeID}
              action={() => {
                setSelectedApplicationType(ApplicationType);
              }}
            >
              <Table.Row isDark={IsDark} id={ApplicationType.applicationTypeID}>
                <ApplicationTypeRow ApplicationType={ApplicationType} />
              </Table.Row>
            </ContextMenu.Row>
          )}
        />
        <ContextMenu.Menu>
          <ApplicationTypeContextMenu
            selectedApplicationTypeId={
              selectedApplicationType?.applicationTypeID
            }
            key={selectedApplicationType?.applicationTypeID}
          />
        </ContextMenu.Menu>
      </ContextMenu>
    </Table>
  );
}

export default ApplicationTypesTable;
