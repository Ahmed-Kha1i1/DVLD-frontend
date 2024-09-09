import { FaPeopleGroup } from "react-icons/fa6";
import Button from "./Button";
import { ImUsers } from "react-icons/im";
import { IoPeopleSharp } from "react-icons/io5";
import Menus from "./Menus";
import Application from "../Feasures/Applications/Application";
import AccountSettings from "../Feasures/AccountSettings/AccountSettings";

function Controls() {
  return (
    <Menus>
      <ul className="py-2 flex gap-6">
        <Application />
        <li>
          <Button text="Persons" icon={<FaPeopleGroup />} />
        </li>
        <li>
          <Button text="Drivers" icon={<IoPeopleSharp />} />
        </li>
        <li>
          <Button text="Users" icon={<ImUsers />} />
        </li>
        <AccountSettings />
      </ul>
    </Menus>
  );
}

export default Controls;
