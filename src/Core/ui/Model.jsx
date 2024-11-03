/* eslint-disable react/prop-types */
import {
  cloneElement,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { HiXMark } from "react-icons/hi2";

import Button from "./Button";
import Popup from "./Popup";

const ModelContext = createContext();
let modalFunctions = {};
function Modal({ children }) {
  const [modalName, setModalName] = useState("");
  const close = () => setModalName("");
  const open = setModalName;
  modalFunctions = { close, open };

  return (
    <ModelContext.Provider
      value={{
        modalName,
        close,
        open,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
}

function Open({ opens: opensWindowName, render }) {
  const { open } = useContext(ModelContext);

  return render(() => open(opensWindowName));
}

function Window({ children, name, className }) {
  const { close, modalName } = useContext(ModelContext);
  const ref = useRef();

  function handleClose(e) {
    if (e.target == ref.current) {
      close();
    }
  }
  if (name !== modalName) return null;

  return (
    <Popup referance={ref} className={className} onClick={handleClose}>
      <Button onClick={close} icon={<HiXMark />} styles="ml-auto" width="fit" />
      <div>{cloneElement(children, { onCloseModal: close })}</div>
    </Popup>
  );
}

Modal.closeWindow = () => modalFunctions.close();
Modal.openWindow = (name) => modalFunctions.open(name);

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
