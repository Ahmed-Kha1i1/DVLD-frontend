/* eslint-disable react/prop-types */
import { useState } from "react";
import ApplicationRow from "./ApplicationRow";
import ContextMenu from "../../Core/ui/ContextMenu";
import Table from "../../Core/ui/Table";
import ApplicationContextMenu from "./ApplicationContextMenu";
import useApplications from "./useApplications";
import Spinner from "../../Core/ui/Spinner";
import Error from "../../Core/ui/Error";

function ApplicationsTable() {
  const { isLoading, error, applications } = useApplications();
  const [selectedApplication, setSelectedApplication] = useState(null);
  const columns = "grid-cols-[0.6fr_1.2fr_0.6fr_1.5fr_1fr_0.5fr_1fr]";

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <Table columns={columns}>
      <Table.Header>
        <div>Id</div>
        <div>Driving Class</div>
        <div>National No.</div>
        <div>Full Name</div>
        <div>Application Date</div>
        <div>Passed Tests</div>
        <div>Status</div>
      </Table.Header>
      <Table.Body
        items={applications}
        render={(application, IsDark) => (
          <ContextMenu.Row
            id={application.localApplicationId}
            key={application.localApplicationId}
            action={() => {
              setSelectedApplication(application);
            }}
          >
            <Table.Row isDark={IsDark} id={application.localApplicationId}>
              <ApplicationRow application={application} />
            </Table.Row>
          </ContextMenu.Row>
        )}
      />
      <ContextMenu.Menu>
        <ApplicationContextMenu
          SelectedApplication={selectedApplication}
          key={selectedApplication?.localApplicationId}
        />
      </ContextMenu.Menu>
    </Table>
  );
}

export default ApplicationsTable;
