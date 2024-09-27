import { formatCurrency } from "../../Utils/FormatUtils";
/* eslint-disable react/prop-types */
function TestTypeRow({ TestType }) {
  const { testTypeID, testTypeTitle, testTypeDescription, testTypeFees } =
    TestType;
  return (
    <>
      <div>{testTypeID}</div>
      <div>{testTypeTitle}</div>
      <div>{testTypeDescription}</div>
      <div>{formatCurrency(testTypeFees)}</div>
    </>
  );
}

export default TestTypeRow;
