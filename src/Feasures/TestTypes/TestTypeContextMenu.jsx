import { FaIdCard } from "react-icons/fa6";
import Item from "../../GlobalUI/item";
import Menu from "../../GlobalUI/Menu";

function TestTypeContextMenu({ selectedTestTypeId }) {
  return (
    <Menu bgColor="bg-inherit">
      <Item text="Edit" icon={<FaIdCard />} />
    </Menu>
  );
}

export default TestTypeContextMenu;
