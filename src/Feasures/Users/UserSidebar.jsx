import { CgProfile } from "react-icons/cg";
import Sidebar from "../../Core/ui/Sidebar";
import Link from "../../Core/ui/Link";
import { useParams } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { FaUserEdit, FaUserTimes } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";

function UserSidebar() {
  const { id } = useParams();
  return (
    <Sidebar>
      <Link
        text="My Profile "
        icon={<CgProfile />}
        type="side"
        to={`${id}/profile`}
      />
      <Link
        text="Personal Details"
        icon={<FaUserEdit />}
        type="side"
        to={`${id}/edit`}
      />
      <Link
        text="Contact Information"
        icon={<CiEdit />}
        type="side"
        to={`${id}/edit-contact`}
      />
      <Link
        text="User Settings"
        icon={<CiEdit />}
        type="side"
        to={`${id}/edit-user`}
      />
      <Link
        text="Change Password"
        icon={<CiEdit />}
        type="side"
        to={`${id}/change-password`}
      />
      <Link
        text="Send Email"
        icon={<RiMailSendLine />}
        type="side"
        to={`${id}/send-email`}
      />
      <Link
        text="Delete Account"
        icon={<FaUserTimes />}
        type="side"
        to={`${id}/delete`}
        color="text-red-500"
      />
    </Sidebar>
  );
}

export default UserSidebar;
