/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
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
  let { open } = useContext(MenusContext);

  return <span onMouseOver={() => open(opens)}>{children}</span>;
}

function Menu({ children, name }) {
  let { openId, close } = useContext(MenusContext);
  const ref = useOutsideClick(close);

  if (openId !== name) return null;

  return (
    <span ref={ref} onClick={() => close()}>
      {children}
    </span>
  );
}

Menus.Button = Button;
Menus.Menu = Menu;

export default Menus;
