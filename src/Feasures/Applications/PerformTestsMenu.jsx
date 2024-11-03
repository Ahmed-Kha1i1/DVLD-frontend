/* eslint-disable react/prop-types */
import { RiFileUserFill } from "react-icons/ri";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";

function PerformTestsMenu({ passedTestCount, selectedApplicationId }) {
  return (
    <Menu isRight={true}>
      <Item
        text="Sechdule Vision Test"
        icon={<RiFileUserFill />}
        disabled={passedTestCount > 0}
        to={`${selectedApplicationId}/sechdule-vision`}
      />
      <Item
        text="Sechdule Written Test"
        icon={<RiFileUserFill />}
        disabled={passedTestCount != 1}
        to={`${selectedApplicationId}/sechdule-written`}
      />
      <Item
        text="Sechdule Street Test"
        icon={<RiFileUserFill />}
        disabled={passedTestCount != 2}
        to={`${selectedApplicationId}/sechdule-street`}
      />
    </Menu>
  );
}

export default PerformTestsMenu;
