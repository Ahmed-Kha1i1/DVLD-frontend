/* eslint-disable react/prop-types */
import ConfirmCancel from "./ConfirmCancel";
import useCancelApplication from "./useCancelApplication";

function ConfirmCancelApplication({ LocalapplicationId, onCancelSuccess }) {
  const { isCancelling, cancelApplication } = useCancelApplication();
  return (
    <ConfirmCancel
      id={LocalapplicationId}
      isCacelling={isCancelling}
      onCancel={() => {
        cancelApplication(LocalapplicationId, {
          onSuccess: () => {
            onCancelSuccess?.();
          },
        });
      }}
      shouldConferm={false}
    />
  );
}

export default ConfirmCancelApplication;
