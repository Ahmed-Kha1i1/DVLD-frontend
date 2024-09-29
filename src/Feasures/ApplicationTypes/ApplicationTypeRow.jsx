import { formatCurrency } from "../../Core/utils/FormatUtils";
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
