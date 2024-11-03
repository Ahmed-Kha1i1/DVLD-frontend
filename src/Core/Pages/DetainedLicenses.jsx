import { FaHand, FaHandHolding } from "react-icons/fa6";
import DetainedLicensesTable from "../../Feasures/DetainedLicenses/DetainedLicensesTable";
import PageTitle from "../ui/PageTitle";
import PrimaryBottun from "../ui/PrimaryBottun";

function DetainedLicenses() {
  return (
    <div>
      <PageTitle title="Manage Detained Licenses" />
      <div className="mb-3 grid grid-cols-[1fr_auto_auto] gap-2">
        <div></div>
        <PrimaryBottun
          to={`release`}
          className={`flex items-center gap-2 self-start rounded-sm py-2`}
        >
          <FaHandHolding className="text-2xl" />
          <span className="">release</span>
        </PrimaryBottun>
        <PrimaryBottun
          to={`detain`}
          className={`flex items-center gap-2 rounded-sm py-2`}
        >
          <FaHand className="text-2xl" />
          <span className="">Detain</span>
        </PrimaryBottun>
      </div>
      <DetainedLicensesTable />
    </div>
  );
}

export default DetainedLicenses;
