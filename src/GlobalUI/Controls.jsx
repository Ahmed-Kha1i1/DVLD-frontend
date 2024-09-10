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
      <ul className="py-2 flex gap-6">
        <Application />
        <Item text="Persons" icon={<FaPeopleGroup />} type="primary" />
        <Item text="Drivers" icon={<IoPeopleSharp />} type="primary" />
        <Item text="Users" icon={<ImUsers />} type="primary" />
        <AccountSettings />
      </ul>
    </Menus>
  );
}

export default Controls;
