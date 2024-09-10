import { PiNewspaperFill } from "react-icons/pi";
import Menus from "../../GlobalUI/Menus";
import ApplicationMenu from "./ApplicationMenu";
import Item from "../../GlobalUI/item";

function Application() {
  return (
    <li className="relative">
      <Menus.Button opens="ApplicationMenu">
        <Item text="Applications" icon={<PiNewspaperFill />} type="primary" />
      </Menus.Button>
      <Menus.Menu name="ApplicationMenu">
        <ApplicationMenu />
      </Menus.Menu>
    </li>
  );
}

export default Application;
