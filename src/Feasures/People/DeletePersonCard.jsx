/* eslint-disable react/prop-types */
import { FaUserTimes } from "react-icons/fa";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import { MdDelete } from "react-icons/md";
import Model from "../../Core/ui/Model";
import Button from "../../Core/ui/Button";
import ConfirmDelete from "../../Core/ui/ConfirmDelete";
import useDeletePerson from "./useDeletePerson";
function DeletePersonCard({ id }) {
  const { isDeleting, deletePerson } = useDeletePerson();

  return (
    <Card>
      <Model>
        <CardTitle text="Delete Person Account" icon={<FaUserTimes />} />
        <p className="py-8 text-xl text-TextColor">
          Before you delete this account, we would want you to know that this
          action will delete the data permanentaly. If that's what you want,
          please proceed with entering the text to confirm.
        </p>

        <Model.Open
          opens="delete"
          render={(open) => (
            <Button
              text="Delete"
              icon={<MdDelete />}
              bgColor="red-500"
              textColor="white"
              styles="mt-8"
              onClick={open}
            />
          )}
        />
        <Model.Window name="delete">
          <ConfirmDelete
            text="person"
            id={id}
            isDeleting={isDeleting}
            onDelete={deletePerson}
          />
        </Model.Window>
      </Model>
    </Card>
  );
}

export default DeletePersonCard;
