import NavigationTabs from "../../Core/ui/Tabs";
import PersonInfoWithFilter from "../People/PersonInfoWithFilter";
function AddEditUser() {
  return (
    <NavigationTabs defaultTab="person">
      <NavigationTabs.Tabs>
        <NavigationTabs.Tab id="person" />
        <NavigationTabs.Tab id="user" />
      </NavigationTabs.Tabs>
      <NavigationTabs.Windows>
        <NavigationTabs.Window id="person">
          <PersonInfoWithFilter />
        </NavigationTabs.Window>
        <NavigationTabs.Window id="user">Window User</NavigationTabs.Window>
      </NavigationTabs.Windows>
    </NavigationTabs>
  );
}

export default AddEditUser;
