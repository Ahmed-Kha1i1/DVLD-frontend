/* eslint-disable react/prop-types */
import Card from "../../Core/ui/Card";
import Error from "../../Core/ui/Error";
import Info from "../../Core/ui/Info";
import InfoLine from "../../Core/ui/InfoLine";
import Spinner from "../../Core/ui/Spinner";
import useApplicationPerTestType from "../Applications/useApplicationPerTestType";
import useTestType from "../TestTypes/useTestType";
import useApplicationType from "../ApplicationTypes/useApplicationType";
import useTestAppointment from "../TestAppointments/useTestAppointment";
import { formatCurrency } from "../../Core/Utils/FormatUtils";
import { useEffect, useState } from "react";
import { doesAttendTestType } from "../../Core/Services/ApiApplications";
import CardTitle from "../../Core/ui/CardTitle";
import { BsFillPersonVcardFill } from "react-icons/bs";
function TestApointmentCard({
  localApplciationId,
  testTypeId,
  testAppointmentId,
}) {
  const [hasAttended, setHasAttended] = useState(false);
  const { isLoading, error, application } = useApplicationPerTestType(
    localApplciationId,
    testTypeId,
  );
  const isEditSession = Boolean(testAppointmentId);
  const { isLoading: isTestTypeLoading, testType } = useTestType(
    testTypeId,
    !isEditSession,
  );
  const { isLoading: isApplicationTypeLoading, applicationType } =
    useApplicationType(7, !isEditSession);
  const { isLoading: isTestAppointmentLoading, testAppointment } =
    useTestAppointment(testAppointmentId, isEditSession);

  useEffect(() => {
    async function checkHasAttended() {
      try {
        const data = await doesAttendTestType(localApplciationId, testTypeId);
        setHasAttended(data);
      } catch (error) {
        throw error.message;
      }
    }
    checkHasAttended();
  }, [localApplciationId, testTypeId]);
  if (
    isLoading ||
    isTestTypeLoading ||
    isApplicationTypeLoading ||
    isTestAppointmentLoading
  )
    return <Spinner />;

  if (error) return <Error message={error?.message} />;
  return (
    <div>
      <Card>
        <CardTitle
          text="Local Application information"
          icon={<BsFillPersonVcardFill />}
        />
        <Info
          title="Local Application Id"
          text={application.localApplicationId}
          isInLine={true}
        />
        <Info title="Class Name" text={application.className} />
        <Info title="Name" text={application.fullName} />
        <Info title="Total Trails" text={application.trails} />
        <Info
          title="Paid fees"
          text={formatCurrency(
            isEditSession ? testAppointment.paidFees : testType.fees,
          )}
        />
      </Card>
      {hasAttended &&
        (testAppointment?.retakeTestApplication || !isEditSession) && (
          <Card>
            <CardTitle
              text="Retake Test information"
              icon={<BsFillPersonVcardFill />}
            />
            <Info
              title="Application Id"
              text={
                isEditSession ? testAppointment.retakeTestApplicationID : "N/A"
              }
            />
            <Info
              title="Retake Paid fees"
              text={formatCurrency(
                isEditSession
                  ? testAppointment.retakeTestApplication.paidFees
                  : applicationType.fees,
              )}
            />
          </Card>
        )}
    </div>
  );
}

export default TestApointmentCard;
