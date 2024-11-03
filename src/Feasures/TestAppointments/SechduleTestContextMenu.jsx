/* eslint-disable react/prop-types */
import { FaIdCard } from "react-icons/fa6";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";
import Model from "../../Core/ui/Model";
import ConfirmTakeTest from "../Tests/ConfirmTakeTest";
import SechduleTest from "./SechduleTest";

function SechduleTestContextMenu({
  selectedTestAppointment,
  testTypeId,
  onCloseMenu,
}) {
  return (
    <Model>
      <Menu bgColor="bg-inherit">
        <Model.Open
          opens="editAppointment"
          render={(open) => (
            <Item text="Edit" icon={<FaIdCard />} onClick={open} />
          )}
        />
        <Model.Window name="editAppointment">
          <SechduleTest
            testTypeId={testTypeId}
            testAppointmentId={selectedTestAppointment.testAppointmentId}
          />
        </Model.Window>

        <Model.Open
          opens="takeTest"
          render={(open) => (
            <Item
              text="Take Test"
              icon={<FaIdCard />}
              disabled={selectedTestAppointment.isLocked}
              onClick={open}
            />
          )}
        />
        <Model.Window name="takeTest">
          <ConfirmTakeTest
            testAppointmentId={selectedTestAppointment.testAppointmentId}
            testTypeId={testTypeId}
            onTakeTestSuccess={() => onCloseMenu?.()}
          />
        </Model.Window>
      </Menu>
    </Model>
  );
}

export default SechduleTestContextMenu;
