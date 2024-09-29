import BoolColumn from "../../Core/ui/BoolColumn";
/* eslint-disable react/prop-types */
function UserRow({ User }) {
  const { fullName, isActive, personId, userId, username } = User;

  return (
    <>
      <div>{userId}</div>
      <div>{personId}</div>
      <div>{fullName}</div>
      <div>{username}</div>
      <BoolColumn value={isActive} />
    </>
  );
}

export default UserRow;
