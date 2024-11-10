/* eslint-disable react/prop-types */
import { cloneElement, useCallback, useState } from "react";
import useOutsideClick from "../Hooks/useOutsideClick";
import useScroll from "../Hooks/useScroll";
import { useContextMenu, ContextMenuContext } from "../Hooks/useContextMenu";
import { RxDotsVertical } from "react-icons/rx";

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
  const { open, setPosition } = useContextMenu();

  function handleOpen(e) {
    e.preventDefault();

    setPosition({
      left: e.clientX,
      top: e.clientY,
    });

    open(id);
    action?.();
  }
  function handleOpenAtSmall(e) {
    e.preventDefault();

    setPosition({
      left: e.clientX - 30,
      top: e.clientY,
    });

    open(id);
    action?.();
  }
  return (
    <li onContextMenu={handleOpen}>
      <div className="grid grid-cols-[1fr_auto]">
        {children}
        <div
          className="hidden cursor-pointer items-center bg-white lg:flex"
          onClick={handleOpenAtSmall}
        >
          <RxDotsVertical />
        </div>
      </div>
    </li>
  );
}

function Menu({ children }) {
  const { openId, close, position } = useContextMenu();
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const ref = useOutsideClick(handleClose);

  const refSize = useCallback((node) => {
    if (node !== null) {
      setHeight(node?.firstElementChild.offsetHeight);
      setWidth(node?.firstElementChild.offsetWidth);
    }
  }, []);

  function handleClose() {
    if (openId) {
      close();
    }
  }

  if (!openId) return null;

  const isWidthOut = position.left + width > window.innerWidth;
  const isHeightOut = position.top + height > window.innerHeight;

  let leftPosition = isWidthOut ? position.left - width : position.left;
  let topPosition = isHeightOut ? position.top - height : position.top;

  return (
    <div
      ref={(node) => {
        refSize(node);
        ref.current = node;
      }}
      className="fixed bg-gray-100 shadow-lg lg:bg-white"
      style={{
        left: `${leftPosition}px`,
        top: `${topPosition}px`,
      }}
    >
      {cloneElement(children, { onCloseMenu: handleClose })}
    </div>
  );
}
ContextMenu.Row = Row;
ContextMenu.Menu = Menu;

export default ContextMenu;
