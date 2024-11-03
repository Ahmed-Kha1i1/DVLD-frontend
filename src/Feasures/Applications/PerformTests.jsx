/* eslint-disable react/prop-types */
import { FaIdCard } from "react-icons/fa6";
import Item from "../../Core/ui/Item";
import Menus from "../../Core/ui/Menus";
import PerformTestsMenu from "./PerformTestsMenu";

function PerformTests({ disabled, passedTestCount, selectedApplicationId }) {
  return (
    <li className="relative">
      <Menus>
        <Menus.Button opens="ApplicationMenu">
          <Item
            text="Sechdule Tests"
            icon={<FaIdCard />}
            hasArraw={true}
            disabled={disabled}
            isli={false}
          />
        </Menus.Button>
        <Menus.Menu name="ApplicationMenu">
          {!disabled ? (
            <PerformTestsMenu
              passedTestCount={passedTestCount}
              selectedApplicationId={selectedApplicationId}
            />
          ) : null}
        </Menus.Menu>
      </Menus>
    </li>
  );
}

export default PerformTests;
