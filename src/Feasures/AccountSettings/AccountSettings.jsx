import { MdOutlineManageAccounts } from "react-icons/md";
import Menus from "../../Core/ui/Menus";
import AccountSettingsMenu from "./AccountSettingsMenu";
import Item from "../../Core/ui/Item";

function AccountSettings() {
  return (
    <li className="relative">
      <Menus.Button opens="AccountSettingsMenu">
        <Item
          text="Account Settings"
          icon={<MdOutlineManageAccounts />}
          type="primary"
        />
      </Menus.Button>
      <Menus.Menu name="AccountSettingsMenu">
        <AccountSettingsMenu />
      </Menus.Menu>
    </li>
  );
}

export default AccountSettings;
