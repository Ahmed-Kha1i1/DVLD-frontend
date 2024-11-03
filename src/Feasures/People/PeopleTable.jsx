import { useState } from "react";

import usePeople from "./usePeople.js";
import Spinner from "../../Core/ui/Spinner.jsx";
import Error from "../../Core/ui/Error.jsx";
import Table from "../../Core/ui/Table.jsx";
import ContextMenu from "../../Core/ui/ContextMenu.jsx";
import PersonContextMenu from "./PersonContextMenu.jsx";
import PersonRow from "./PersonRow.jsx";

function PeopleTable() {
  const { isLoading, error, People } = usePeople();

  const [selectedPerson, setSelectedPerson] = useState(null);

  const columns = "grid-cols-[0.6fr_1fr_2fr_1.5fr_1fr_2fr_1.5fr_1.2fr_0.8fr]";

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} />;
  return (
    <Table columns={columns}>
      <Table.Header>
        <div>Id</div>
        <div>National No.</div>
        <div>Full Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Address</div>
        <div>Date of Birth</div>
        <div>Nationality</div>
        <div>Gender</div>
      </Table.Header>

      <Table.Body
        items={People}
        render={(Person, IsDark) => (
          <ContextMenu.Row
            id={Person.personID}
            key={Person.personID}
            action={() => {
              setSelectedPerson(Person);
            }}
          >
            <Table.Row isDark={IsDark} id={Person.personID}>
              <PersonRow Person={Person} />
            </Table.Row>
          </ContextMenu.Row>
        )}
      />
      <ContextMenu.Menu>
        <PersonContextMenu
          selectedPerson={selectedPerson}
          key={selectedPerson?.personID}
        />
      </ContextMenu.Menu>
    </Table>
  );
}

export default PeopleTable;
