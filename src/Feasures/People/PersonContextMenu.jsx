/* eslint-disable react/prop-types */
import { FaIdCard } from "react-icons/fa6";
import Item from "../../GlobalUI/item";
import Menu from "../../GlobalUI/Menu";

function PersonContextMenu({ selectedPerson }) {
  return (
    <Menu bgColor="bg-inherit">
      <li>
        <Item
          text="Show Details"
          icon={<FaIdCard />}
          to={`${selectedPerson.personID}/profile`}
        />
      </li>
      <hr />
      <Item text="Add New" icon={<FaIdCard />} />
      <Item text="Edit" icon={<FaIdCard />} />
      <li>
        <Item
          text="Delete"
          icon={<FaIdCard />}
          to={`${selectedPerson.personID}/delete`}
        />
      </li>
      <hr />
      <Item text="Send Email" icon={<FaIdCard />} />
    </Menu>
  );
}

export default PersonContextMenu;
