/* eslint-disable react/prop-types */
import { MdCancel } from "react-icons/md";
import Button from "../../Core/ui/Button";
import Confirm from "../../Core/ui/Confirm";

function ConfirmCancel({ id, isCacelling, onCancel }) {
  return (
    <Confirm
      Icon={
        <MdCancel className="text-black-500 h-16 w-16 rounded-full border-4 border-yellow-100 bg-yellow-200 text-4xl" />
      }
      title={`Cancel Application`}
      paragraph={
        <>
          <p>Are you sure you want to delete this Application with ID {id}?</p>
          <p>This action cannot be undone.</p>
        </>
      }
      onClick={() => onCancel()}
    >
      <Button
        text="Cancel"
        icon={<MdCancel />}
        textColor="black"
        styles=" bg-yellow-500 justify-center w-full"
        disabled={isCacelling}
      />
    </Confirm>
  );
}

export default ConfirmCancel;
