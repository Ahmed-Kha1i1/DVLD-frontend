/* eslint-disable react/prop-types */
import { FaIdCard } from "react-icons/fa6";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";

function PersonContextMenu({ selectedPerson }) {
  return (
    <Menu bgColor="bg-inherit">
      <Item
        text="Show Details"
        icon={<FaIdCard />}
        to={`${selectedPerson.personID}/profile`}
      />
      <hr />
      <Item text="Add New" icon={<FaIdCard />} to="add-new" />
      <Item
        text="Edit"
        icon={<FaIdCard />}
        to={`${selectedPerson.personID}/edit`}
      />
      <Item
        text="Delete"
        icon={<FaIdCard />}
        to={`${selectedPerson.personID}/delete`}
      />
      <hr />
      <Item text="Send Email" icon={<FaIdCard />} />
    </Menu>
  );
}

export default PersonContextMenu;
