import { MdManageHistory } from "react-icons/md";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";
import Menus from "../../Core/ui/Menus";

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
