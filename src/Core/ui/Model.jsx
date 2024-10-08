/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useOutsideClick from "../Hooks/useOutsideClick";
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

  return <div>{render(() => open(opensWindowName))}</div>;
}
function Window({ children, name, className }) {
  const { close, modalName } = useContext(ModelContext);
  const ref = useOutsideClick(close);
  if (name !== modalName) return null;

  return createPortal(
    <Popup referance={ref} className={className}>
      <Button
        onClick={close}
        icon={<HiXMark />}
        styles="ml-auto"
        width="fit"
      ></Button>
      <div>{cloneElement(children, { onCloseModal: close })}</div>;
    </Popup>,
    document.body,
  );
}

Modal.closeWindow = () => modalFunctions.close();
Modal.openWindow = (name) => modalFunctions.open(name);

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
