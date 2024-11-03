/* eslint-disable react/prop-types */
import { useState } from "react";
import useIssueLicense from "./useIssueLicense";
import ApplicationCard from "./ApplicationCard";
import useApplication from "./useApplication";
import Spinner from "../../Core/ui/Spinner";
import Error from "../../Core/ui/Error";
import BasicApplicationCard from "../BasicApplication/BasicApplicationCard";
import { MdCheckCircle } from "react-icons/md";
import Button from "../../Core/ui/Button";
import Notes from "../../Core/ui/Notes";

function ConfirmIssueLicense({ localApplicationId, onIssueSuccess }) {
  const { IsIssueing, IssueLicense } = useIssueLicense();
  const { isLoading, error, application } = useApplication(localApplicationId);
  const [notes, setNotes] = useState("");

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  function onSubmit(e) {
    e.preventDefault();

    IssueLicense(
      { localApplicationId, notes },
      {
        onSuccess: () => {
          onIssueSuccess?.();
        },
      },
    );
  }
  return (
    <div>
      <ApplicationCard application={application} />
      <BasicApplicationCard basicApplication={application.basicApplication} />
      <form>
        <Notes notes={notes} setNotes={setNotes} />
        <Button
          text="Issue License"
          icon={<MdCheckCircle />}
          bgColor="green-500"
          textColor="white"
          styles="mt-8"
          onClick={onSubmit}
          disabled={IsIssueing}
        />
      </form>
    </div>
  );
}

export default ConfirmIssueLicense;
