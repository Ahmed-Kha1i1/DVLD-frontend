import { CgProfile } from "react-icons/cg";
import Sidebar from "../../GlobalUI/Sidebar";
import Link from "../../GlobalUI/link";
import { useParams } from "react-router-dom";
import { RiMailSendLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";

function DriverSidebar() {
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
        text="Local Licenses"
        icon={<CiEdit />}
        type="side"
        to={`${id}/local-licenses`}
      />
      <Link
        text="International Licenses"
        icon={<CiEdit />}
        type="side"
        to={`${id}/international-licenses`}
      />
      <Link
        text="Send Email"
        icon={<RiMailSendLine />}
        type="side"
        to={`${id}/send-email`}
      />
    </Sidebar>
  );
}

export default DriverSidebar;
