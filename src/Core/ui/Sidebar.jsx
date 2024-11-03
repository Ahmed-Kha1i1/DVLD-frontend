/* eslint-disable react/prop-types */
import Links from "./Links";
import SideLogo from "./SideLogo";

function Sidebar({ children }) {
  return (
    <div className="shadow-right min-w-72 rounded-md bg-sectionColor px-3 py-10">
      <SideLogo />
      <Links>{children}</Links>
    </div>
  );
}

export default Sidebar;
