import Button from "./Button";
import Popup from "./Popup";

function SuccessPopup({ message, onCloseModal }) {
  return (
    <Popup>
      <div>
        <h3>Success!</h3>
        <p>{message}</p>
        <Button onClick={onCloseModal} />
      </div>
    </Popup>
  );
}

export default SuccessPopup;
