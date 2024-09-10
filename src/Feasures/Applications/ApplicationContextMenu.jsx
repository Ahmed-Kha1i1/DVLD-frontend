import { FaIdCard } from "react-icons/fa6";
import Item from "../../GlobalUI/item";
import Menu from "../../GlobalUI/Menu";

function ApplicationContextMenu() {
  return (
    <Menu bgColor="bg-inherit">
      <Item text="Show Details" icon={<FaIdCard />} />
      <hr />
      <Item text="Edit" icon={<FaIdCard />} />
      <Item text="Delete" icon={<FaIdCard />} />
      <hr />
      <Item text="Cancel" icon={<FaIdCard />} />
      <hr />
      <Item text="Sechdule Tests" icon={<FaIdCard />} hasArraw={true} />
      <hr />
      <Item text="Issue Driving License (First Time)" icon={<FaIdCard />} />
      <hr />
      <Item text="Show Person License History" icon={<FaIdCard />} />
    </Menu>
  );
}

export default ApplicationContextMenu;
