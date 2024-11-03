/* eslint-disable react/prop-types */
import ConfirmDelete from "../../Core/ui/ConfirmDelete";
import useDeleteApplication from "./useDeleteApplication";
function ConfirmDeleteApplication({ LocalapplicationId, onDeleteSuccess }) {
  const { isDeleting, deleteApplication } = useDeleteApplication();
  return (
    <ConfirmDelete
      text="Application"
      id={LocalapplicationId}
      isDeleting={isDeleting}
      onDelete={() => {
        deleteApplication(LocalapplicationId, {
          onSuccess: () => {
            onDeleteSuccess?.();
          },
        });
      }}
      shouldConferm={false}
    />
  );
}

export default ConfirmDeleteApplication;
