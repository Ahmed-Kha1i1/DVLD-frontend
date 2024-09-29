/* eslint-disable react/prop-types */
import Info from "../../Core/ui/Info";
import Card from "../../Core/ui/Card";
import InfoLine from "../../Core/ui/InfoLine";
import { FormatDateAsNumber } from "../../Core/utils/FormatUtils";
import { calculateAge } from "../../Core/utils/dateUtils";
import { BsFillPersonVcardFill } from "react-icons/bs";
import CardTitle from "../../Core/ui/CardTitle";
import Empty from "../../Core/ui/Empty";
function PersonCard({ person }) {
  if (!person) return <Empty>No person to show</Empty>;
  return (
    <Card>
      <CardTitle text="Person Details" icon={<BsFillPersonVcardFill />} />
      <InfoLine>
        <Info title="Id" text={person.personID} />
        <Info title="national No." text={person.nationalNo} />
      </InfoLine>
      <InfoLine>
        <Info title="first Name" text={person.firstName} />
        <Info title="second Name" text={person.secondName} />
      </InfoLine>
      <InfoLine>
        <Info title="third Name" text={person.thirdName} />
        <Info title="last Name" text={person.lastName} />
      </InfoLine>
      <InfoLine>
        <Info title="Birthday" text={FormatDateAsNumber(person.dateOfBirth)}>
          <span className="ml-4 text-Darkgray">
            Age {calculateAge(person.dateOfBirth)}
          </span>
        </Info>
        <Info title="gender" text={person.gender} />
      </InfoLine>
      <InfoLine>
        <Info title="country" text={person.countryName} />
        <Info title="last Name" text={person.lastName} />
      </InfoLine>
      <InfoLine>
        <Info title="email" text={person.email} />
        <Info title="phone" text={person.phone} />
      </InfoLine>
      <div>
        <Info title="Address" text={person.address} />
      </div>
    </Card>
  );
}

export default PersonCard;
