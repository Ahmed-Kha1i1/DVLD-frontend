import { BASE_URL } from "../../Constants.js";
import useCurrentUser from "../../Feasures/Auth/useCurrentUser.js";
function UserInfo() {
  const { currentUser } = useCurrentUser();
  const name = currentUser
    ? currentUser?.person.firstName + " " + currentUser?.person.secondName
    : "Not set";
  return (
    <div className="flex items-center gap-4 xs:justify-center">
      <div className="flex flex-col items-end">
        <span className="text-base font-semibold">{name}</span>
        <span className="text-sm text-Darkgray">
          {currentUser?.role ?? "Role"}
        </span>
      </div>
      <div>
        <img
          src={
            currentUser?.person?.imageName
              ? `${BASE_URL}/api/Files/GetImage/${currentUser.person.imageName}`
              : "/default.png"
          }
          alt="image"
          className="h-14 w-14 rounded-full bg-gray-300"
        />
      </div>
    </div>
  );
}

export default UserInfo;
