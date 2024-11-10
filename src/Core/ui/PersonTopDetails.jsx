import { BASE_URL } from "../../Constants";

/* eslint-disable react/prop-types */
function PersonTopDetails({ person, className }) {
  return (
    <div
      className={`flex min-h-24 items-center ${className} sm:flex-col sm:items-center`}
    >
      <img
        src={
          person.imageName
            ? `${BASE_URL}/api/Files/GetImage/${person.imageName}`
            : "/default.png"
        }
        alt="person image"
        className="mr-6 w-24 rounded-md"
      />
      <div className="flex h-full flex-col justify-between py-4 sm:items-center sm:text-center">
        <h4 className="sm:w-56 sm:text-xl">{`${person.fullName} `}</h4>
        <a className="w-fit cursor-pointer text-xl font-semibold text-Darkgray underline sm:text-lg">
          {person.email}
        </a>
      </div>
    </div>
  );
}

export default PersonTopDetails;
