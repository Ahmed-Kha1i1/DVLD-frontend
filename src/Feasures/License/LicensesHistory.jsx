/* eslint-disable react/prop-types */
import Error from "../../Core/ui/Error";
import Spinner from "../../Core/ui/Spinner";
import LicensesHistoryTabs from "../Drivers/LicensesHistoryTabs";
import PersonCard from "../People/PersonCard";
import usePerson from "../People/usePerson";
import { useParams } from "react-router-dom";
import PageTitle from "../../Core/ui/PageTitle";
import { useEffect, useState } from "react";
import { getDriverId } from "../../Core/Services/ApiPeople";

function LicensesHistory() {
  const { id: personId } = useParams();
  const { isLoading: personLoading, error, person } = usePerson(personId);
  const [drievrId, serDriverId] = useState(null);
  useEffect(() => {
    async function getId() {
      const id = await getDriverId(personId);
      if (id) {
        serDriverId(id);
      }
    }
    getId();
  }, [personId]);
  if (personLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <div>
      <PageTitle title={`Licenses History (Person Id: ${personId})`} />
      <div className="flex flex-col gap-10">
        <PersonCard person={person} />
        <LicensesHistoryTabs driverId={drievrId} />
      </div>
    </div>
  );
}

export default LicensesHistory;
