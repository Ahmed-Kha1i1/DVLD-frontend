import { FaIdCard } from "react-icons/fa6";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";

function TestTypeContextMenu({ selectedTestTypeId }) {
  return (
    <Menu bgColor="bg-inherit">
      <Item text="Edit" icon={<FaIdCard />} />
    </Menu>
  );
}

export default TestTypeContextMenu;
