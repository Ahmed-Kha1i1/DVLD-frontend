function UserInfo() {
  return (
    <div className="flex items-center gap-4 xs:justify-center">
      <div className="flex flex-col items-end">
        <span className="text-base font-semibold">Ahmed Magdy</span>
        <span className="text-sm text-Darkgray">(Hard coded) Admin</span>
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
