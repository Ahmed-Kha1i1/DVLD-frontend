/* eslint-disable react/prop-types */
import { useState } from "react";
import InlineInput from "../../Core/ui/InlineInput";

function ReplaceInput({ onChange }) {
  const [reason, setReason] = useState("damaged");

  const handleResultChange = (e) => {
    onChange(e.target.value);
    setReason(e.target.value);
  };

  return (
    <InlineInput id="issueReason" label="Repalcement For:" className="mb-0">
      <div className="flex gap-2">
        <label className="">
          <input
            type="radio"
            name="issueReason"
            value="damaged"
            className="mr-2"
            checked={reason === "damaged"}
            onChange={handleResultChange}
          />
          Damaged License
        </label>
        <label>
          <input
            type="radio"
            name="issueReason"
            value="lost"
            checked={reason === "lost"}
            onChange={handleResultChange}
            className="mr-2"
          />
          Lost License
        </label>
      </div>
    </InlineInput>
  );
}

export default ReplaceInput;
