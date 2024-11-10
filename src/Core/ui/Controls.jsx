import { FaPeopleGroup } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { IoClose, IoPeopleSharp } from "react-icons/io5";
import Menus from "./Menus";
import Application from "../../Feasures/Applications/Application";
import AccountSettings from "../../Feasures/AccountSettings/AccountSettings";
import Item from "./Item";
import { BsList } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../Hooks/useOutsideClick";
import useWindowSize from "../Hooks/useWindowSize";

function Controls() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef();
  function close() {
    setMenuOpen(false);
  }

  const ref = useOutsideClick(close, toggleRef.current);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width > 1023 && menuOpen) {
      close();
    }
  }, [width, menuOpen]);

  function handleAutoClose(e) {
    if (menuOpen && e.target.closest("a")) {
      close();
    }
  }

  return (
    <Menus>
      <button
        className="my-3 ml-auto mr-16 hidden lg:block md:mr-4"
        onClick={() => setMenuOpen(!menuOpen)}
        ref={toggleRef}
      >
        <BsList
          className={`hidden cursor-pointer text-5xl text-black ${!menuOpen && "lg:block"}`}
        />
        <IoClose
          className={`hidden cursor-pointer text-5xl text-black ${menuOpen && "lg:block"}`}
        />
      </button>
      <div
        className={`relative flex h-16 justify-items-center border-b border-Lightgray lg:z-40 lg:h-0`}
        ref={ref}
      >
        <ul
          className={`has-arrow lg:right- flex items-center gap-6 px-12 text-center lg:absolute lg:left-16 lg:right-16 lg:top-6 lg:w-[calc(100%-8rem)] lg:flex-col lg:items-stretch lg:gap-2 lg:rounded-md lg:bg-white lg:px-6 lg:py-3 lg:shadow-custom-gray md:left-4 md:right-4 md:w-[calc(100%-2rem)] ${menuOpen ? "lg:flex" : "lg:hidden"} `}
          onClick={handleAutoClose}
        >
          <Application />
          <Item
            text="Persons"
            icon={<FaPeopleGroup />}
            type="primary"
            to="people"
            className="lg:text-sm"
          />
          <Item
            text="Drivers"
            icon={<IoPeopleSharp />}
            type="primary"
            to="drivers"
          />
          <Item text="Users" icon={<ImUsers />} type="primary" to="users" />
          <AccountSettings />
        </ul>
      </div>
    </Menus>
  );
}

export default Controls;
