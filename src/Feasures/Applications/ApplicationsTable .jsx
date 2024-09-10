/* eslint-disable react/prop-types */
import { useState } from "react";
import ApplicationRow from "./ApplicationRow";
import ContextMenu from "../../GlobalUI/ContextMenu";
import Table from "../../GlobalUI/Table";
import ApplicationContextMenu from "./ApplicationContextMenu";
import useApplications from "./useApplications";

function ApplicationsTable() {
  const { isLoading, error, applications } = useApplications();
  const [selectedApplication, setSelectedApplication] = useState(null);
  const columns = "grid-cols-[0.6fr_1.2fr_0.6fr_1.5fr_1fr_0.5fr_1fr]";

  if (isLoading) return <span>Loading</span>;

  if (error?.message) return <span>{error.message}</span>;

  return (
    <Table columns={columns}>
      <Table.Header>
        <div>ِApplication Id</div>
        <div>Driving Class</div>
        <div>National No.</div>
        <div>Full Name</div>
        <div>Application Date</div>
        <div>Passed Tests</div>
        <div>Status</div>
      </Table.Header>
      <ContextMenu>
        <Table.Body
          items={applications}
          render={(application) => (
            <ContextMenu.Row
              id={application.localApplicationId}
              key={application.localApplicationId}
              action={() => {
                setSelectedApplication(application);
              }}
            >
              <ApplicationRow application={application} columns={columns} />
            </ContextMenu.Row>
          )}
        />
        <ContextMenu.Menu>
          <ApplicationContextMenu
            SelectedApplication={selectedApplication}
            key={selectedApplication?.localApplicationId}
          />
        </ContextMenu.Menu>
      </ContextMenu>
    </Table>
  );
}

export default ApplicationsTable;
