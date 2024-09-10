/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import useOutsideClick from "../Hooks/useOutsideClick";
import useScroll from "../Hooks/useScroll";

const ContextMenuContext = createContext();

function ContextMenu({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);
  const close = () => setOpenId("");
  const open = (id) => setOpenId(id);

  return (
    <ContextMenuContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </ContextMenuContext.Provider>
  );
}

function Row({ id, children }) {
  const { open, setPosition, openId } = useContext(ContextMenuContext);
  function handleOpen(e) {
    e.preventDefault();

    setPosition({
      left: e.clientX,
      top: e.clientY
    });

    open(id);
  }
  return (
    <li
      className={`${openId === id ? "bg-secondary" : ""}`}
      onContextMenu={handleOpen}
    >
      {children}
    </li>
  );
}

function Menu({ children }) {
  const { openId, close, position } = useContext(ContextMenuContext);
  const ref = useOutsideClick(handleClose);

  useScroll(handleClose);
  function handleClose() {
    if (openId) {
      close();
    }
  }

  if (!openId) return null;

  return (
    <div className="menu" ref={ref}>
      <div
        className="fixed bg-gray-100 shadow-lg rounded-md"
        style={{
          left: `${position.left}px`,
          top: `${position.top}px`
        }}
      >
        {children}
      </div>
    </div>
  );
}
ContextMenu.Row = Row;
ContextMenu.Menu = Menu;
export default ContextMenu;
