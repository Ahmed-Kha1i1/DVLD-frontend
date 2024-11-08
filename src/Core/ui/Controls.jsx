import { FaPeopleGroup } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { IoClose, IoPeopleSharp } from "react-icons/io5";
import Menus from "./Menus";
import Application from "../../Feasures/Applications/Application";
import AccountSettings from "../../Feasures/AccountSettings/AccountSettings";
import Item from "./Item";
import { BsList } from "react-icons/bs";
import { useState } from "react";

function Controls() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Menus>
      <button
        className="my-3 ml-auto mr-16 hidden md:mr-4 lg:block"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <BsList
          className={`hidden cursor-pointer text-5xl text-black ${!menuOpen && "lg:block"}`}
        />
        <IoClose
          className={`hidden cursor-pointer text-5xl text-black ${menuOpen && "lg:block"}`}
        />
      </button>
      <div
        className={`relative flex h-16 justify-items-center border-b border-Lightgray lg:h-0`}
      >
        <ul
          className={`has-arrow lg:right- flex items-center gap-6 px-12 text-center md:left-4 md:right-4 md:w-[calc(100%-2rem)] lg:absolute lg:left-16 lg:right-16 lg:top-6 lg:w-[calc(100%-8rem)] lg:flex-col lg:items-start lg:rounded-md lg:bg-white lg:px-6 lg:py-3 lg:shadow-custom-gray ${menuOpen ? "lg:flex" : "lg:hidden"}`}
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
