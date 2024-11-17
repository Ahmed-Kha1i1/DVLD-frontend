import { MdManageHistory } from "react-icons/md";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";
import Menus from "../../Core/ui/Menus";
import { useLogout } from "../Auth/useLogout";
import useCurrentUser from "../Auth/useCurrentUser";

function AccountSettingsMenu() {
  const { logout, isLoading } = useLogout();
  const { isLoading: isCurrentLoading, currentUser } = useCurrentUser();
  return (
    <Menus>
      <Menu>
        <Item
          text="Account Details "
          icon={<MdManageHistory />}
          to={
            !isCurrentLoading &&
            currentUser &&
            `/users/${currentUser.userId}/profile`
          }
        />
        <Item
          text="Edit Account "
          icon={<MdManageHistory />}
          to={
            !isCurrentLoading &&
            currentUser &&
            `/users/${currentUser.userId}/edit-user`
          }
        />
        <Item
          text="Sign out "
          icon={<MdManageHistory />}
          onClick={() => logout()}
          disabled={isLoading}
        />
      </Menu>
    </Menus>
  );
}

export default AccountSettingsMenu;
