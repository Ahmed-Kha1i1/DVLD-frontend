import { MdOutlineManageAccounts } from "react-icons/md";
import Button from "../../GlobalUI/Button";
import Menus from "../../GlobalUI/Menus";
import AccountSettingsMenu from "./AccountSettingsMenu";

function AccountSettings() {
  return (
    <li className="relative">
      <Menus.Button opens="AccountSettingsMenu">
        <Button text="Account Settings" icon={<MdOutlineManageAccounts />} />
      </Menus.Button>
      <Menus.Menu name="AccountSettingsMenu">
        <AccountSettingsMenu />
      </Menus.Menu>
    </li>
  );
}

export default AccountSettings;
