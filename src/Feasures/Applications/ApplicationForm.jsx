/* eslint-disable react/prop-types */
import Error from "../../Core/ui/Error";
import ValueLine from "../../Core/ui/ValueLine";
import SaveButton from "../../Core/ui/SaveButton";
import {
  formatCurrency,
  FormatDateAsNumber,
} from "../../Core/utils/FormatUtils";

import useApplicationType from "../ApplicationTypes/useApplicationType";
import { CurrentuserId } from "../../Constants";
import LicenseClassesSelector from "../../Core/ui/LicenseClassesSelector";
import useApplicationForm from "./useApplicationForm";

function ApplicationForm({ personId, formDataRef, applicationToEdit = {} }) {
  const {
    isLoading: isApplicationTypeLoading,
    error: applicationTypeError,
    applicationType,
  } = useApplicationType(1);

  const { onSubmit, isLoading, register, errors } = useApplicationForm(
    personId,
    {
      ...applicationToEdit,
      licenseClassId: formDataRef.current?.licenseClassId
        ? formDataRef.current.licenseClassId
        : applicationToEdit.licenseClassId,
    },
    onSaveData,
  );

  function onSaveData(data) {
    formDataRef.current = data;
  }

  if (applicationTypeError)
    return <Error message={applicationTypeError?.message} />;
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <ValueLine parameter="Local Application Id">
        {applicationToEdit?.localApplicationId || "????"}
      </ValueLine>
      <ValueLine parameter="Applciation Date">
        {FormatDateAsNumber(applicationToEdit?.applicationDate || Date.now())}
      </ValueLine>
      <ValueLine parameter="Applciation Fees">
        {isApplicationTypeLoading
          ? "Loading..."
          : formatCurrency(applicationToEdit?.paidFees || applicationType.fees)}
      </ValueLine>
      <ValueLine parameter="Created User">
        {applicationToEdit?.username || CurrentuserId}
      </ValueLine>
      <LicenseClassesSelector
        register={register}
        errors={errors}
        personId={personId}
      />
      <SaveButton disabled={isLoading} />
    </form>
  );
}

export default ApplicationForm;
