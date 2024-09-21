/* eslint-disable react/prop-types */
import { BsFillPersonVcardFill } from "react-icons/bs";
import Card from "../../GlobalUI/Card";
import CardTitle from "../../GlobalUI/CardTitle";
import Info from "../../GlobalUI/Info";
import InfoLine from "../../GlobalUI/InfoLine";
import { FormatDateAsNumber } from "../../Utils/helpers";

function DriverCard({ driver }) {
  return (
    <Card>
      <CardTitle text="Driver Details" icon={<BsFillPersonVcardFill />} />
      <div>
        <Info title="Id" text={driver.driverID} />
      </div>
      <InfoLine>
        <Info
          title="Created date"
          text={FormatDateAsNumber(driver.createdDate)}
        />
        <Info title="Active Licenses" text={driver.numberofActiveLicenses} />
      </InfoLine>
    </Card>
  );
}

export default DriverCard;
