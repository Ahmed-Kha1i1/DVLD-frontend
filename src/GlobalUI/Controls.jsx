import { FaPeopleGroup } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { IoPeopleSharp } from "react-icons/io5";
import Menus from "./Menus";
import Application from "../Feasures/Applications/Application";
import AccountSettings from "../Feasures/AccountSettings/AccountSettings";
import Item from "./item";

function Controls() {
  return (
    <Menus>
      <ul className="py-2 flex gap-6 px-12 border-Lightgray border-b">
        <Application />
        <Item
          text="Persons"
          icon={<FaPeopleGroup />}
          type="primary"
          to="People"
        />
        <li>
          <Item
            text="Drivers"
            icon={<IoPeopleSharp />}
            type="primary"
            to="Drivers"
          />
        </li>
        <li>
          <Item text="Users" icon={<ImUsers />} type="primary" to="Users" />
        </li>
        <AccountSettings />
      </ul>
    </Menus>
  );
}

export default Controls;
