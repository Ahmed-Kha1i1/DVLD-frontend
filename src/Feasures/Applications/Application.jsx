/* eslint-disable react/prop-types */
import Menus from "../../Core/ui/Menus";
import ApplicationMenu from "./ApplicationMenu";
import Item from "../../Core/ui/Item";
import { FaIdCard } from "react-icons/fa6";

function Application() {
  return (
    <li className="relative">
      <Menus.Button opens="ApplicationMenu">
        <Item text="Applications" icon={<FaIdCard />} type="primary" />
      </Menus.Button>
      <Menus.Menu name="ApplicationMenu">
        <ApplicationMenu />
      </Menus.Menu>
    </li>
  );
}

export default Application;
