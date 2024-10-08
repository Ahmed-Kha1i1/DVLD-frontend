import { useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import PersonCard from "../../Feasures/People/PersonCard";
import useDriver from "../../Feasures/Drivers/useDriver";
import DriverCard from "../../Feasures/Drivers/DriverCard";

function DriverDetails() {
  const { id } = useParams();
  const { isLoading, error, driver } = useDriver(id);

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;

  return (
    <div>
      <PersonCard person={driver.person} />
      <DriverCard driver={driver} />
    </div>
  );
}

export default DriverDetails;
