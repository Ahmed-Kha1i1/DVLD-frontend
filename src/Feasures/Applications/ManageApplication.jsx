import { SiPaperswithcode } from "react-icons/si";
import Item from "../../Core/ui/Item";
import ManageApplicationMenu from "./ManageApplicationMenu";
import Menus from "../../Core/ui/Menus";

function ManageApplication() {
  return (
    <li className="relative">
      <Menus.Button opens="ManageApplicationMenu">
        <Item
          text="Manage Applications"
          icon={<SiPaperswithcode />}
          hasArraw={true}
          isli={false}
        />
      </Menus.Button>
      <Menus.Menu name="ManageApplicationMenu">
        <ManageApplicationMenu />
      </Menus.Menu>
    </li>
  );
}

export default ManageApplication;
