/* eslint-disable react/prop-types */
import { FaIdCard } from "react-icons/fa6";
import Item from "../../GlobalUI/item";
import Menu from "../../GlobalUI/Menu";
import PerformTests from "./PerformTests";
import { Statuses } from "../../Constants";

function ApplicationContextMenu({ SelectedApplication }) {
  return (
    <Menu bgColor="bg-inherit">
      <li>
        <Item
          text="Show Details"
          icon={<FaIdCard />}
          to={SelectedApplication.localApplicationId.toString()}
        />
      </li>
      <hr />
      <Item
        text="Edit"
        icon={<FaIdCard />}
        disabled={SelectedApplication.status !== Statuses.New}
      />
      <Item
        text="Delete"
        icon={<FaIdCard />}
        disabled={SelectedApplication.status !== Statuses.New}
      />
      <hr />
      <Item
        text="Cancel"
        icon={<FaIdCard />}
        disabled={SelectedApplication.status !== Statuses.New}
      />
      <hr />
      <PerformTests
        disabled={
          SelectedApplication.passedTestCount === 3 ||
          SelectedApplication.status !== Statuses.New
        }
        passedTestCount={SelectedApplication.passedTestCount}
      />
      <hr />
      <Item
        text="Issue Driving License (First Time)"
        icon={<FaIdCard />}
        disabled={
          SelectedApplication.passedTestCount !== 3 ||
          SelectedApplication.status !== Statuses.New
        }
      />
      <hr />
      <Item
        text="Show License"
        icon={<FaIdCard />}
        disabled={SelectedApplication.status !== Statuses.Completed}
      />
      <hr />
      <Item text="Show Person License History" icon={<FaIdCard />} />
    </Menu>
  );
}

export default ApplicationContextMenu;
