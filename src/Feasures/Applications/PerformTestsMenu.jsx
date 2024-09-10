/* eslint-disable react/prop-types */
import { RiFileUserFill } from "react-icons/ri";
import Item from "../../GlobalUI/item";
import Menu from "../../GlobalUI/Menu";

function PerformTestsMenu({ passedTestCount }) {
  return (
    <Menu isRight={true}>
      <Item
        text="Sechdule Vision Test"
        icon={<RiFileUserFill />}
        disabled={passedTestCount > 0}
      />
      <Item
        text="Sechdule Written Test"
        icon={<RiFileUserFill />}
        disabled={passedTestCount != 1}
      />
      <Item
        text="Sechdule Street Test"
        icon={<RiFileUserFill />}
        disabled={passedTestCount != 2}
      />
    </Menu>
  );
}

export default PerformTestsMenu;
