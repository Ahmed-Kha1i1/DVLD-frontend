/* eslint-disable react/prop-types */
import EditPersonForm from "./EditPersonForm";

function EditPersonWindow({ onSuccess, personId, navigate }) {
  return (
    <EditPersonForm
      onSuccess={onSuccess}
      personId={personId}
      navigate={navigate}
    />
  );
}

export default EditPersonWindow;
