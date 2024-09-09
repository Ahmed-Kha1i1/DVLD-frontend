import { MdManageHistory } from "react-icons/md";
import Item from "../../GlobalUI/item";
import Menu from "../../GlobalUI/Menu";
import Menus from "../../GlobalUI/Menus";

function AccountSettingsMenu() {
  return (
    <Menus>
      <Menu>
        <Item text="Account Details" icon={<MdManageHistory />} />
        <Item text="Edit Account" icon={<MdManageHistory />} />
        <Item text="Sign out" icon={<MdManageHistory />} />
      </Menu>
    </Menus>
  );
}

export default AccountSettingsMenu;
