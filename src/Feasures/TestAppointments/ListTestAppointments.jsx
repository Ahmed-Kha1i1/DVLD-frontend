/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import useApplication from "../Applications/useApplication";
import Spinner from "../../Core/ui/Spinner";
import Error from "../../Core/ui/Error";
import PageTitle from "../../Core/ui/PageTitle";
import AddButton from "../../Core/ui/AddButton";
import Model from "../../Core/ui/Model";
import ApplicationCard from "../Applications/ApplicationCard";
import BasicApplicationCard from "../BasicApplication/BasicApplicationCard";
import { doesPassThisTest, GetTestTypeName } from "../../Core/Utils/helpers";
import SechduleTestTable from "./SechduleTestTable";
import SechduleTest from "./SechduleTest";

function ListTestAppointments({ testTypeId }) {
  const { id } = useParams();
  const { isLoading, error, application } = useApplication(id);

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;
  return (
    <div>
      <PageTitle title={`${GetTestTypeName(testTypeId)} Test Appointments`} />
      <div>
        <ApplicationCard application={application} />
        <BasicApplicationCard basicApplication={application.basicApplication} />
      </div>
      <div className="flex items-center justify-between">
        <h4 className="mb-4 mt-6">Appointments:</h4>
        <Model>
          <Model.Open
            opens="sechduleTest"
            render={(open) => (
              <AddButton
                disabled={doesPassThisTest(
                  testTypeId,
                  application.passedTestCount,
                )}
                onClick={open}
              />
            )}
          />
          <Model.Window name="sechduleTest">
            <SechduleTest testTypeId={testTypeId} />
          </Model.Window>
        </Model>
      </div>
      <SechduleTestTable localApplicationId={id} testTypeId={testTypeId} />
    </div>
  );
}

export default ListTestAppointments;
