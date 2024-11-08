import { FaHandHolding } from "react-icons/fa";
import PrimaryBottun from "../../Core/ui/PrimaryBottun";

function ReleaseButton() {
  return (
    <PrimaryBottun
      to={`release`}
      className={`flex items-center gap-2 rounded-sm py-2`}
    >
      <FaHandHolding className="text-2xl" />
      <span className="">release</span>
    </PrimaryBottun>
  );
}

export default ReleaseButton;
