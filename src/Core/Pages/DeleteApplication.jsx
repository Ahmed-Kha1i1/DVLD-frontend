import { FaUserTimes } from "react-icons/fa";
import Card from "../ui/Card";
import CardTitle from "../ui/CardTitle";
import Model from "../ui/Model";
import Button from "../ui/Button";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import ConfirmDeleteApplication from "../../Feasures/Applications/ConfirmDeleteApplication";
function DeleteApplication() {
  const { id } = useParams();
  return (
    <Card>
      <Model>
        <CardTitle text="Delete Person Account" icon={<FaUserTimes />} />
        <p className="one-for-card one-for-card text-TextColorc py-8 text-xl">
          Deleting this application will permanently remove all related data. If
          you’re certain about this decision, please proceed by click delete.
        </p>

        <Model.Open
          opens="delete"
          render={(open) => (
            <Button
              text="Delete"
              icon={<MdDelete />}
              bgColor="red-500"
              textColor="white"
              styles="mt-8  mr-auto one-for-card"
              onClick={open}
            />
          )}
        />
        <Model.Window name="delete">
          <ConfirmDeleteApplication LocalapplicationId={id} />
        </Model.Window>
      </Model>
    </Card>
  );
}

export default DeleteApplication;
