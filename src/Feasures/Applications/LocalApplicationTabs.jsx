/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import NavigationTabs from "../../Core/ui/Tabs";
import PersonInfoWithFilter from "../People/PersonInfoWithFilter";
import { persondetailTypes } from "../People/peopleKeys";
import ApplicationForm from "./ApplicationForm";

function LocalApplicationTabs({ applicationToEdit }) {
  const [isEditSession, setIsEditSession] = useState(
    Boolean(applicationToEdit?.localApplicationId),
  );
  const formDataRef = useRef({}); //form data
  const [currentPersonId, setCurrentPersonId] = useState("");

  const valueRef = useRef(isEditSession ? applicationToEdit?.personId : "");
  const typeRef = useRef(persondetailTypes.ID);

  function onSelectPerson(personId) {
    if (personId) setCurrentPersonId(personId);
    else setCurrentPersonId("");
  }

  function OnAddSeccuss(newpersonId) {
    setCurrentPersonId(newpersonId);
    setIsEditSession(true);
    valueRef.current = newpersonId;
    typeRef.current = persondetailTypes.ID;
  }

  return (
    <NavigationTabs defaultTab="Person">
      <NavigationTabs.Tabs>
        <NavigationTabs.Tab id="Person" />
        <NavigationTabs.Tab id="Application" disabled={!currentPersonId} />
      </NavigationTabs.Tabs>
      <NavigationTabs.Windows>
        <NavigationTabs.Window id="Person">
          <PersonInfoWithFilter
            onSelectPerson={onSelectPerson}
            valueRef={valueRef}
            typeRef={typeRef}
            isEditSession={isEditSession}
            OnAddSeccuss={OnAddSeccuss}
          />
        </NavigationTabs.Window>
        <NavigationTabs.Window id="Application">
          <ApplicationForm
            personId={currentPersonId}
            formDataRef={formDataRef}
            applicationToEdit={applicationToEdit}
          />
        </NavigationTabs.Window>
      </NavigationTabs.Windows>
    </NavigationTabs>
  );
}

export default LocalApplicationTabs;
