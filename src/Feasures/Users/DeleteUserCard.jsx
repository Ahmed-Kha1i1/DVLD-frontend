/* eslint-disable react/prop-types */
import { FaUserTimes } from "react-icons/fa";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import { MdDelete } from "react-icons/md";
import Model from "../../Core/ui/Model";
import Button from "../../Core/ui/Button";
import ConfirmDelete from "../../Core/ui/ConfirmDelete";
import { useDeleteUser } from "./useDeleteUser";

function DeleteUserCard({ id }) {
  const { isDeleting, deleteUser } = useDeleteUser();

  return (
    <Card>
      <Model>
        <CardTitle text="Delete User Account" icon={<FaUserTimes />} />
        <p className="py-8 text-xl text-TextColor">
          Before you delete this User, we would want you to know that this
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
              styles="my-8"
              onClick={open}
            />
          )}
        />
        <Model.Window name="delete">
          <ConfirmDelete
            text="user"
            id={id}
            isDeleting={isDeleting}
            onDelete={deleteUser}
          />
        </Model.Window>
      </Model>
      <div>
        <h6 className="my-4 text-gray-500">Please read this carefully:</h6>
        <p className="text-Lightgray">
          You are about to submit a request for us to permanently close this
          account and delete the data. Once this account has been closed, all of
          services accessed through this account will no longer be available for
          this user , across any DVLD sites globally.
        </p>
      </div>
    </Card>
  );
}

export default DeleteUserCard;
