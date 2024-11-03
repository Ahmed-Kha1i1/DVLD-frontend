import { FaPeopleGroup } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { IoPeopleSharp } from "react-icons/io5";
import Menus from "./Menus";
import Application from "../../Feasures/Applications/Application";
import AccountSettings from "../../Feasures/AccountSettings/AccountSettings";
import Item from "./Item";

function Controls() {
  return (
    <Menus>
      <ul className="flex items-center gap-6 border-b border-Lightgray px-12 py-2 text-center">
        <Application />
        <Item
          text="Persons"
          icon={<FaPeopleGroup />}
          type="primary"
          to="people"
        />
        <Item
          text="Drivers"
          icon={<IoPeopleSharp />}
          type="primary"
          to="drivers"
        />
        <Item text="Users" icon={<ImUsers />} type="primary" to="users" />
        <AccountSettings />
      </ul>
    </Menus>
  );
}

export default Controls;
