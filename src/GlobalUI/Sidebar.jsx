/* eslint-disable react/prop-types */
import Links from "./links";
import SideLogo from "./SideLogo";

function Sidebar({ children }) {
  return (
    <div className="min-w-72 bg-sectionColor py-10 px-3 z-10 shadow-right rounded-md">
      <SideLogo />
      <Links>{children}</Links>
    </div>
  );
}

export default Sidebar;
