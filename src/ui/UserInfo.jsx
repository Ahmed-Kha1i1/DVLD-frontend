function UserInfo() {
  return (
    <div className="flex items-center gap-4 ">
      <div className="flex flex-col items-end">
        <span className="font-semibold text-base">Ahmed Magdy</span>
        <span className="text-Darkgray text-sm">Admin</span>
      </div>
      <div>
        <img
          src="/default.png"
          alt="personal"
          className="w-14 rounded-full bg-gray-300"
        />
      </div>
    </div>
  );
}

export default UserInfo;
