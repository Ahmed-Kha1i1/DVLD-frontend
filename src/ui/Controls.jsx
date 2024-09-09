import Button from "./Button";

function Controls() {
  return (
    <div className="py-2 flex gap-6">
      <Button Text="Application" />
      <Button Text="Persons" />
      <Button Text="Drivers" />
      <Button Text="Users" />
      <Button Text="Account Settings" />
    </div>
  );
}

export default Controls;
