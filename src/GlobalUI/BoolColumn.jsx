/* eslint-disable react/prop-types */
function BoolColumn({ value }) {
  console.log(value);
  if (value) {
    return <div className="text-blue-800 font-semibold">True</div>;
  } else {
    return <div className="text-green-500 font-semibold">False</div>;
  }
}

export default BoolColumn;
