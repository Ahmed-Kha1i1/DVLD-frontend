/* eslint-disable react/prop-types */
import Info from "../../Core/ui/Info";
import Card from "../../Core/ui/Card";
import InfoLine from "../../Core/ui/InfoLine";
import { FormatDateAsNumber } from "../../Core/Utils/FormatUtils";
import { calculateAge } from "../../Core/Utils/dateUtils";
import { BsFillPersonVcardFill } from "react-icons/bs";
import CardTitle from "../../Core/ui/CardTitle";
import Empty from "../../Core/ui/Empty";
import PersonTopDetails from "../../Core/ui/PersonTopDetails";
import RedirectLink from "../../Core/ui/RedirectLink";
function PersonCard({ person }) {
  if (!person) return <Empty>No person to show</Empty>;

  return (
    <Card>
      <CardTitle text="Person Details" icon={<BsFillPersonVcardFill />} />
      <PersonTopDetails person={person} className="one-for-card py-5" />

      <Info title="Id" text={person.personID} />

      <Info title="national No." text={person.nationalNo} />
      <Info title="country" text={person.countryName} />

      <Info title="Birthday" text={FormatDateAsNumber(person.dateOfBirth)}>
        <span className="ml-4 text-Darkgray">
          Age {calculateAge(person.dateOfBirth)}
        </span>
      </Info>
      <Info title="gender" text={person.gender} />

      <Info title="email" text={person.email} />
      <Info title="phone" text={person.phone} />

      <Info title="Address" text={person.address} isInLine={true} />

      <RedirectLink
        path={`/people/${person.personID}/edit`}
        text="Edit Person"
      />
    </Card>
  );
}

export default PersonCard;
