import { MdOutlineManageAccounts } from "react-icons/md";
import Menus from "../../GlobalUI/Menus";
import AccountSettingsMenu from "./AccountSettingsMenu";
import Item from "../../GlobalUI/item";

function AccountSettings() {
  return (
    <li className="relative">
      <Menus.Button opens="AccountSettingsMenu">
        <Item
          text="Account Settings"
          icon={<MdOutlineManageAccounts />}
          type="primary"
          to="/"
        />
      </Menus.Button>
      <Menus.Menu name="AccountSettingsMenu">
        <AccountSettingsMenu />
      </Menus.Menu>
    </li>
  );
}

export default AccountSettings;
