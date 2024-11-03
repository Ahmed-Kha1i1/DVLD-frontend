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
        <h4 className="mb-2">Local Application information</h4>
        <InfoLine>
          <Info
            title="Local Application Id"
            text={application.localApplicationId}
          />
        </InfoLine>
        <InfoLine>
          <Info title="Class Name" text={application.className} />
        </InfoLine>
        <InfoLine>
          <Info title="Name" text={application.fullName} />
        </InfoLine>
        <InfoLine>
          <Info title="Total Trails" text={application.trails} />
        </InfoLine>
        <InfoLine>
          <Info
            title="Paid fees"
            text={formatCurrency(
              isEditSession ? testAppointment.paidFees : testType.fees,
            )}
          />
        </InfoLine>
      </Card>
      {hasAttended &&
        (testAppointment?.retakeTestApplication || !isEditSession) && (
          <Card>
            <h4 className="mb-2">Retake Test information</h4>
            <InfoLine>
              <Info
                title="Application Id"
                text={
                  isEditSession
                    ? testAppointment.retakeTestApplicationID
                    : "N/A"
                }
              />
            </InfoLine>
            <InfoLine>
              <Info
                title="Retake Paid fees"
                text={formatCurrency(
                  isEditSession
                    ? testAppointment.retakeTestApplication.paidFees
                    : applicationType.fees,
                )}
              />
            </InfoLine>
          </Card>
        )}
    </div>
  );
}

export default TestApointmentCard;
