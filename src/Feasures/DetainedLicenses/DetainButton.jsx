import { FaHand } from "react-icons/fa6";
import PrimaryBottun from "../../Core/ui/PrimaryBottun";

function DetainButton() {
  return (
    <PrimaryBottun
      to={`detain`}
      className={`flex items-center gap-2 rounded-sm py-2`}
    >
      <FaHand className="text-2xl" />
      <span className="">Detain</span>
    </PrimaryBottun>
  );
}

export default DetainButton;
