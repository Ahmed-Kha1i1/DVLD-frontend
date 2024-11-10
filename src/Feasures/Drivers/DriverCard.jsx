/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../Core/ui/Card";
import CardTitle from "../../Core/ui/CardTitle";
import Info from "../../Core/ui/Info";
import { FormatDateAsNumber } from "../../Core/utils/FormatUtils";

function DriverCard({ driver }) {
  return (
    <Card>
      <CardTitle text="Driver Details" icon={<BsFillPersonVcardFill />} />

      <Info title="Id" text={driver.driverID} isInLine={true} />

      <Info
        title="Created date"
        text={FormatDateAsNumber(driver.createdDate)}
      />
      <Info title="Active Licenses" text={driver.numberofActiveLicenses} />
    </Card>
  );
}

export default DriverCard;
