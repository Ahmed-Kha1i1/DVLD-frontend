/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import useOutsideClick from "../Hooks/useOutsideClick";
import useWindowSize from "../Hooks/useWindowSize";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const close = () => setOpenId("");
  const open = (id) => setOpenId(id);
  const { width } = useWindowSize();
  const isSmallScreen = width <= 1023;
  return (
    <MenusContext.Provider value={{ openId, open, close, isSmallScreen }}>
      {children}
    </MenusContext.Provider>
  );
}

function Button({ children, opens }) {
  const { open, openId, isSmallScreen } = useContext(MenusContext);
  const timeoutId = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
    if (openId !== opens) {
      open(opens);
    }
  };

  const handleMouseOver = () => {
    if (!isSmallScreen) {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        open(opens);
      }, 300);
    }
  };

  const handleMouseLeave = () => {
    if (!isSmallScreen && timeoutId.current) clearTimeout(timeoutId.current);
  };

  useEffect(() => {
    // Clean up timeout on unmount
    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <div
      onClick={isSmallScreen ? handleClick : undefined}
      onMouseOver={isSmallScreen ? undefined : handleMouseOver}
      onMouseLeave={isSmallScreen ? undefined : handleMouseLeave}
      className="col"
    >
      {children}
    </div>
  );
}

function Menu({ children, name }) {
  let { openId, close } = useContext(MenusContext);

  const ref = useOutsideClick(close, null, false);

  if (openId !== name) return null;

  function handleAutoClose(e) {
    if (openId && e.target.closest("a")) {
      close();
    }
  }

  return (
    <div ref={ref} onClick={handleAutoClose}>
      {children}
    </div>
  );
}

Menus.Button = Button;
Menus.Menu = Menu;

export default Menus;
