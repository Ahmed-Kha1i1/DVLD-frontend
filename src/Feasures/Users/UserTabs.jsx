/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import NavigationTabs from "../../Core/ui/Tabs";
import PersonInfoWithFilter from "../People/PersonInfoWithFilter";
import UserForm from "./UserForm";
import { persondetailTypes } from "../People/peopleKeys";
import InputError from "../../Core/ui/InputError";
import { isUserExistByPersonId } from "../../Core/Services/ApiUsers";
import { useMutation } from "@tanstack/react-query";

//import UserForm from "./UserForm";

function UserTabs({ userToEdit }) {
  const [isEditSession, setIsEditSession] = useState(
    Boolean(userToEdit?.userId),
  );
  const formDataRef = useRef({}); //form data
  const [currentPersonId, setCurrentPersonId] = useState("");

  const valueRef = useRef(isEditSession ? userToEdit?.personId : "");
  const typeRef = useRef(persondetailTypes.ID);

  const [isUnique, setIsUnique] = useState(false);

  const { mutate: checkUserExistence } = useMutation({
    mutationFn: isUserExistByPersonId,
    onSuccess: (result, personId) => {
      setIsUnique(!result.exists);
      setCurrentPersonId(personId);
    },
    onError: () => {
      setIsUnique(false);
      setCurrentPersonId("");
    },
  });

  async function onSelectPerson(personId) {
    if (!personId) {
      setIsUnique(false);
      setCurrentPersonId("");
      return;
    }

    if (isEditSession) {
      setIsUnique(true);
      setCurrentPersonId(personId);
    } else {
      checkUserExistence(personId);
    }
  }

  function OnAddSeccuss(newpersonId) {
    setIsUnique(true);
    setCurrentPersonId(newpersonId);
    setIsEditSession(true);
    valueRef.current = newpersonId;
    typeRef.current = persondetailTypes.ID;
  }
  return (
    <NavigationTabs defaultTab="person">
      <NavigationTabs.Tabs>
        <NavigationTabs.Tab id="person" />
        <NavigationTabs.Tab
          id="user"
          disabled={!currentPersonId || !isUnique}
        />
      </NavigationTabs.Tabs>
      <NavigationTabs.Windows>
        <NavigationTabs.Window id="person">
          <InputError>
            {currentPersonId &&
              !isUnique &&
              "Selected Person already has a user, choose another one"}
          </InputError>
          <PersonInfoWithFilter
            onSelectPerson={onSelectPerson}
            valueRef={valueRef}
            typeRef={typeRef}
            isEditSession={isEditSession}
            OnAddSeccuss={OnAddSeccuss}
          />
        </NavigationTabs.Window>
        <NavigationTabs.Window id="user">
          <UserForm
            formDataRef={formDataRef}
            personId={currentPersonId}
            userToEdit={userToEdit}
          />
        </NavigationTabs.Window>
      </NavigationTabs.Windows>
    </NavigationTabs>
  );
}

export default UserTabs;
