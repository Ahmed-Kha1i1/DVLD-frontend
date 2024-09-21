import { CgProfile } from "react-icons/cg";
import Sidebar from "../../GlobalUI/Sidebar";
import Link from "../../GlobalUI/link";
import { useParams } from "react-router-dom";
import { RiMailSendLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { FaUserEdit, FaUserTimes } from "react-icons/fa";

function PersonSidebar() {
  const { id } = useParams();
  return (
    <Sidebar>
      <Link
        text="Profile"
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

export default PersonSidebar;
