/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import Button from "./Button";
import Model from "./Model";
export default function EditButtonModel({ opens, setId }) {
  return (
    <Model.Open
      opens={opens}
      render={(open) => (
        <Button
          styles="bg-primary justify-center w-20 self-center"
          icon={<FaEdit className="text-white" />}
          onClick={() => {
            open();
            setId();
          }}
        />
      )}
    />
  );
}
