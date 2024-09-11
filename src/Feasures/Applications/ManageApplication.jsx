import { SiPaperswithcode } from "react-icons/si";
import Item from "../../GlobalUI/item";
import ManageApplicationMenu from "./ManageApplicationMenu";
import Menus from "../../GlobalUI/Menus";

function ManageApplication() {
  return (
    <li className="relative">
      <ul>
        <Menus.Button opens="ManageApplicationMenu">
          <Item
            text="Manage Applications"
            icon={<SiPaperswithcode />}
            hasArraw={true}
          />
        </Menus.Button>
        <Menus.Menu name="ManageApplicationMenu">
          <ManageApplicationMenu />
        </Menus.Menu>
      </ul>
    </li>
  );
}

export default ManageApplication;
