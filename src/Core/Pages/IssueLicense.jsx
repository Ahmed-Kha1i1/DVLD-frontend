import Card from "../ui/Card";
import CardTitle from "../ui/CardTitle";
import Model from "../ui/Model";
import Button from "../ui/Button";
import { MdCheckCircle } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import ConfirmIssueLicense from "../../Feasures/Applications/ConfirmIssueLicense";
import { useParams } from "react-router-dom";
function IssueLicense() {
  const { id } = useParams();

  return (
    <Card>
      <Model>
        <CardTitle text="Issue License" icon={<FaClipboardCheck />} />
        <p className="one-for-card py-8 text-xl text-TextColor">
          You are about to issue a license for this application. Once issued,
          this action is permanent, and the application status will be updated
          accordingly. Please confirm if you'd like to proceed with issuing the
          license.
        </p>

        <Model.Open
          opens="issueLicense"
          render={(open) => (
            <Button
              text="Issue License"
              icon={<MdCheckCircle />}
              bgColor="green-500"
              textColor="white"
              styles="mt-8 one-for-card mr-auto"
              onClick={open}
            />
          )}
        />
        <Model.Window name="issueLicense">
          <ConfirmIssueLicense localApplicationId={id} />
        </Model.Window>
      </Model>
    </Card>
  );
}

export default IssueLicense;
