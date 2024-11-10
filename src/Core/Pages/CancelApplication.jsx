import { FaBan } from "react-icons/fa";
import Card from "../ui/Card";
import CardTitle from "../ui/CardTitle";
import Model from "../ui/Model";
import Button from "../ui/Button";
import { MdCancel } from "react-icons/md";
import { useParams } from "react-router-dom";
import ConfirmCancelApplication from "../../Feasures/Applications/ConfirmCancelApplication";

function CancelApplication() {
  const { id } = useParams();

  return (
    <Card>
      <Model>
        <CardTitle text="Cancel License Application" icon={<FaBan />} />
        <p className="one-for-card py-8 text-xl text-TextColor">
          Once this application is canceled, it cannot be reverted to "new" or
          moved forward in the process. If you're certain you want to cancel
          this application, please confirm below.
        </p>

        <Model.Open
          opens="cancelApplication"
          render={(open) => (
            <Button
              text="Cancel"
              icon={<MdCancel />}
              textColor="black"
              styles="mt-8 bg-yellow-500 one-for-card mr-auto"
              onClick={open}
            />
          )}
        />
        <Model.Window name="cancelApplication">
          <ConfirmCancelApplication LocalapplicationId={id} />
        </Model.Window>
      </Model>
    </Card>
  );
}

export default CancelApplication;
