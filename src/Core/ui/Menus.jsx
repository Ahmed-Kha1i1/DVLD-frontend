/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import useOutsideClick from "../Hooks/useOutsideClick";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const close = () => setOpenId("");
  const open = (id) => setOpenId(id);

  return (
    <MenusContext.Provider value={{ openId, open, close }}>
      {children}
    </MenusContext.Provider>
  );
}

function Button({ children, opens }) {
  const { open } = useContext(MenusContext);
  const timeoutId = useRef(null);

  const handleMouseOver = () => {
    // Clear any existing timeout
    if (timeoutId.current) clearTimeout(timeoutId.current);

    // Set a new timeout for opening the menu
    timeoutId.current = setTimeout(() => {
      open(opens);
    }, 300);
  };

  const handleMouseLeave = () => {
    // Clear the timeout on mouse leave to avoid unwanted menu openings
    if (timeoutId.current) clearTimeout(timeoutId.current);
  };

  useEffect(() => {
    // Clean up timeout on unmount
    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="col"
    >
      {children}
    </div>
  );
}

function Menu({ children, name }) {
  let { openId, close } = useContext(MenusContext);
  const ref = useOutsideClick(close);

  if (openId !== name) return null;

  return (
    <div ref={ref} onClick={() => close()}>
      {children}
    </div>
  );
}

Menus.Button = Button;
Menus.Menu = Menu;

export default Menus;
