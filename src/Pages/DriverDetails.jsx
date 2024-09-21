import { useParams } from "react-router-dom";
import Spiner from "../GlobalUI/Spiner";
import Error from "../GlobalUI/Error";
import PersonTopDetails from "../GlobalUI/PersonTopDetails";
import PersonCard from "../Feasures/People/PersonCard";
import useDriver from "../Feasures/Drivers/useDriver";
import DriverCard from "../Feasures/Drivers/DriverCard";

function DriverDetails() {
  const { id } = useParams();
  const { isLoading, error, driver } = useDriver(id);

  if (isLoading) return <Spiner />;

  if (error) return <Error message={error?.message} />;

  return (
    <div>
      <PersonTopDetails person={driver.person} />
      <PersonCard person={driver.person} />
      <DriverCard driver={driver} />
    </div>
  );
}

export default DriverDetails;
