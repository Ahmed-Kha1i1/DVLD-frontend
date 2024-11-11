import { MdManageHistory } from "react-icons/md";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";
import Menus from "../../Core/ui/Menus";

function AccountSettingsMenu() {
  return (
    <Menus>
      <Menu>
        <Item
          text="Account Details (under development)"
          icon={<MdManageHistory />}
        />
        <Item
          text="Edit Account (under development)"
          icon={<MdManageHistory />}
        />
        <Item text="Sign out (under development)" icon={<MdManageHistory />} />
      </Menu>
    </Menus>
  );
}

export default AccountSettingsMenu;
