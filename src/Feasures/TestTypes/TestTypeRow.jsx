import EditButtonModel from "../../Core/ui/EditButtonModel";
import { formatCurrency } from "../../Core/Utils/FormatUtils";
/* eslint-disable react/prop-types */
function TestTypeRow({ TestType, setSelectedTestType }) {
  const { id, title, description, fees } = TestType;
  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{formatCurrency(fees)}</div>
      <EditButtonModel
        opens="edit-test-type"
        setId={() => setSelectedTestType(TestType)}
      />
    </>
  );
}

export default TestTypeRow;
