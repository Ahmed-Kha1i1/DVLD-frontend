/* eslint-disable react/prop-types */
import { createContext, useContext, useRef, useState } from "react";
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

function Row({ id, children, action }) {
  const { open, setPosition, openId } = useContext(ContextMenuContext);

  function handleOpen(e) {
    e.preventDefault();

    setPosition({
      left: e.clientX,
      top: e.clientY
    });

    open(id);
    action?.();
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
  const { openId, close, position, setPosition } =
    useContext(ContextMenuContext);
  const ref = useOutsideClick(handleClose);

  useScroll(handleClose);
  function handleClose() {
    if (openId) {
      close();
    }
  }

  if (!openId) return null;
  console.log(ref.current);
  if (ref.current?.firstElementChild) {
    const Height = ref.current?.firstElementChild.offsetHeight;
    const Width = ref.current?.firstElementChild.offsetWidth;

    const isWidthOut = position.left + Width > window.innerWidth;
    const isHeightOut = position.top + Height > window.innerHeight;

    if (isWidthOut || isHeightOut)
      setPosition({
        left: isWidthOut ? position.left - Width : position.left,
        top: isHeightOut ? position.top - Height : position.top
      });
  }

  return (
    <div
      ref={ref}
      className="fixed bg-gray-100 shadow-lg rounded-md"
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`
      }}
      onClick={() => handleClose()}
    >
      {children}
    </div>
  );
}
ContextMenu.Row = Row;
ContextMenu.Menu = Menu;

export default ContextMenu;
