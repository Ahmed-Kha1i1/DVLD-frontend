import { formatCurrency } from "../../Utils/helpers";
/* eslint-disable react/prop-types */
function ApplicationTypeRow({ ApplicationType }) {
  const { applicationTypeID, applicationTypeTitle, applicationFees } =
    ApplicationType;

  return (
    <>
      <div>{applicationTypeID}</div>
      <div>{applicationTypeTitle}</div>
      <div>{formatCurrency(applicationFees)}</div>
    </>
  );
}

export default ApplicationTypeRow;
