import { PiNewspaperFill } from "react-icons/pi";
import Button from "../../GlobalUI/Button";
import Menus from "../../GlobalUI/Menus";
import ApplicationMenu from "./ApplicationMenu";

function Application() {
  return (
    <li className="relative">
      <Menus.Button opens="ApplicationMenu">
        <Button text="Application" icon={<PiNewspaperFill />} />
      </Menus.Button>
      <Menus.Menu name="ApplicationMenu">
        <ApplicationMenu />
      </Menus.Menu>
    </li>
  );
}

export default Application;
