import Row from "../../GlobalUI/Row";
/* eslint-disable react/prop-types */
function TestTypeRow({ TestType, columns }) {
  const { testTypeID, testTypeTitle, testTypeDescription, testTypeFees } =
    TestType;
  return (
    <Row columns={columns}>
      <div>{testTypeID}</div>
      <div>{testTypeTitle}</div>
      <div>{testTypeDescription}</div>
      <div>{testTypeFees}</div>
    </Row>
  );
}

export default TestTypeRow;
