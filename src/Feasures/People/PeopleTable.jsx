import { useState } from "react";

import usePeople from "./usePeople.js";
import Spiner from "../../GlobalUI/Spiner.jsx";
import Error from "../../GlobalUI/Error.jsx";
import Table from "../../GlobalUI/Table.jsx";
import ContextMenu from "../../GlobalUI/ContextMenu.jsx";
import PersonContextMenu from "./PersonContextMenu.jsx";
import PersonRow from "./PersonRow.jsx";

function PeopleTable() {
  const { isLoading, error, People } = usePeople();
  
  const [selectedPerson, setSelectedPerson] = useState(null);

  const columns = "grid-cols-[0.6fr_1fr_2fr_1.5fr_1fr_2fr_1.5fr_1.2fr_0.8fr]";

  if (isLoading) return <Spiner />;

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
      <ContextMenu>
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
      </ContextMenu>
    </Table>
  );
}

export default PeopleTable;
