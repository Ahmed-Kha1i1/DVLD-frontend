/* eslint-disable react/prop-types */
import { FaIdCard } from "react-icons/fa6";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";
import Model from "../../Core/ui/Model";
import PerformTests from "./PerformTests";
import { applicationStatuses } from "../../Constants";
import useActiveLicenseId from "./useActiveLicenseId";

import ConfirmDeleteApplication from "./ConfirmDeleteApplication";
import ConfirmCancelApplication from "./ConfirmCancelApplication";
import ConfirmIssueLicense from "./ConfirmIssueLicense";

function ApplicationContextMenu({ SelectedApplication, onCloseMenu }) {
  const { isLoading, LicenseId } = useActiveLicenseId(
    SelectedApplication.localApplicationId,
    SelectedApplication.status === applicationStatuses.Completed,
  );

  return (
    <Model>
      <Menu bgColor="bg-inherit">
        <Item
          text="Show Details"
          icon={<FaIdCard />}
          to={`${SelectedApplication.localApplicationId}/details`}
        />
        <hr />
        <Item
          text="Edit"
          icon={<FaIdCard />}
          disabled={SelectedApplication.status !== applicationStatuses.New}
          to={`${SelectedApplication.localApplicationId}/edit`}
        />
        <Model.Open
          opens="delete"
          render={(open) => (
            <Item
              text="Delete"
              icon={<FaIdCard />}
              disabled={SelectedApplication.status !== applicationStatuses.New}
              onClick={open}
            />
          )}
        />
        <Model.Window name="delete">
          <ConfirmDeleteApplication
            LocalapplicationId={SelectedApplication.localApplicationId}
            onDeleteSuccess={() => onCloseMenu?.()}
          />
        </Model.Window>

        <hr />
        <Model.Open
          opens="cancel"
          render={(open) => (
            <Item
              text="Cancel"
              icon={<FaIdCard />}
              disabled={SelectedApplication.status !== applicationStatuses.New}
              onClick={open}
            />
          )}
        />
        <Model.Window name="cancel">
          <ConfirmCancelApplication
            LocalapplicationId={SelectedApplication.localApplicationId}
            onCancelSuccess={() => onCloseMenu?.()}
          />
        </Model.Window>

        <hr />
        <PerformTests
          disabled={
            SelectedApplication.passedTestCount === 3 ||
            SelectedApplication.status !== applicationStatuses.New
          }
          passedTestCount={SelectedApplication.passedTestCount}
          selectedApplicationId={SelectedApplication.localApplicationId}
        />
        <hr />

        <Model.Open
          opens="issue"
          render={(open) => (
            <Item
              text="Issue Driving License (First Time)"
              icon={<FaIdCard />}
              disabled={
                SelectedApplication.passedTestCount !== 3 ||
                SelectedApplication.status !== applicationStatuses.New
              }
              onClick={open}
            />
          )}
        />
        <Model.Window name="issue">
          <ConfirmIssueLicense
            localApplicationId={SelectedApplication.localApplicationId}
            onIssueSuccess={() => onCloseMenu?.()}
          />
        </Model.Window>
        <hr />
        <Item
          text={`${isLoading ? "Loading..." : "Show License"}`}
          icon={<FaIdCard />}
          disabled={
            SelectedApplication.status !== applicationStatuses.Completed ||
            isLoading
          }
          to={`/licenses/${LicenseId}`}
        />
        <hr />
        <Item
          text="Show Person License History"
          icon={<FaIdCard />}
          to={`/licenses-history/${SelectedApplication.personId}`}
        />
      </Menu>
    </Model>
  );
}

export default ApplicationContextMenu;
