/* eslint-disable react/prop-types */
import Card from "../../GlobalUI/Card";
import CardTitle from "../../GlobalUI/CardTitle";
import Info from "../../GlobalUI/Info";
import { GoPersonFill } from "react-icons/go";
import Active from "../../GlobalUI/Active";

function UserCard({ user }) {
  return (
    <Card>
      <CardTitle text="User Details" icon={<GoPersonFill />}>
        <Active active={user.isActive} />
      </CardTitle>
      <Info title="Id" text={user.userId} />
      <Info title="Username" text={user.username} />
    </Card>
  );
}

export default UserCard;
