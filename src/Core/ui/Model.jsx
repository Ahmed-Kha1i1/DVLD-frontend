/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useOutsideClick from "../Hooks/useOutsideClick";
import Button from "./Button";

const ModelContext = createContext();

function Modal({ children }) {
  const [modalName, setModalName] = useState("");
  const close = () => setModalName("");
  const open = setModalName;
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
function Window({ children, name }) {
  const { close, modalName } = useContext(ModelContext);
  const ref = useOutsideClick(close);
  if (name !== modalName) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
      <div
        className="popup-enter shadow-all rounded-2xl bg-white p-10"
        ref={ref}
      >
        <Button
          onClick={close}
          icon={<HiXMark />}
          styles="ml-auto"
          width="fit"
        ></Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>;
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
