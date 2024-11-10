/* eslint-disable react/prop-types */
import Links from "./Links";
import SideLogo from "./SideLogo";

function Sidebar({ children }) {
  return (
    <div className="shadow-right min-w-72 rounded-md bg-sectionColor px-3 py-10 xl:flex xl:w-28 xl:min-w-28 xl:flex-col xl:items-center md:min-w-full md:rounded-none md:py-2 md:shadow-none">
      <SideLogo />
      <Links>{children}</Links>
    </div>
  );
}

export default Sidebar;
