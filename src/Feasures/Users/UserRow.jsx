import Row from "../../GlobalUI/Row";
/* eslint-disable react/prop-types */
function UserRow({ User, columns }) {
  const { fullName, isActive, personId, userId, username } = User;

  return (
    <Row columns={columns}>
      <div>{userId}</div>
      <div>{personId}</div>
      <div>{fullName}</div>
      <div>{username}</div>
      <div>{isActive}</div>
    </Row>
  );
}

export default UserRow;
