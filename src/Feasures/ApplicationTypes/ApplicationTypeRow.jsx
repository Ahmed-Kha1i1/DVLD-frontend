import EditButtonModel from "../../Core/ui/EditButtonModel";
import { formatCurrency } from "../../Core/Utils/FormatUtils";

/* eslint-disable react/prop-types */
function ApplicationTypeRow({ ApplicationType, setSelectedApplicationType }) {
  const { id, title, fees } = ApplicationType;

  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
      <div>{formatCurrency(fees)}</div>
      <EditButtonModel
        opens="edit-Application-type"
        setId={() => setSelectedApplicationType(ApplicationType)}
      />
    </>
  );
}

export default ApplicationTypeRow;
