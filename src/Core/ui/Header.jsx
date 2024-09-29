import Controls from "./Controls";
import UserBar from "./UserBar";

function Header() {
  return (
    <div className="bg-sectionColor">
      <UserBar />
      <Controls />
    </div>
  );
}

export default Header;
