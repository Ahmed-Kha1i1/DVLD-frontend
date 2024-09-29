/* eslint-disable react/prop-types */
function BoolColumn({ value }) {
  if (value) {
    return <div className="font-semibold text-blue-800">True</div>;
  } else {
    return <div className="font-semibold text-green-500">False</div>;
  }
}

export default BoolColumn;
