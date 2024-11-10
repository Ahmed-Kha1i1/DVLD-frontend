import { createContext, useContext, useState } from "react";

/* eslint-disable react/prop-types */
const TabsContext = createContext();

function NavigationTabs({ children, defaultTab }) {
  const [TabName, setTabName] = useState(defaultTab);
  const close = () => setTabName("");
  const open = setTabName;
  return (
    <TabsContext.Provider
      value={{
        TabName,
        close,
        open,
      }}
    >
      <div className="grid grid-rows-[auto_1fr]">{children}</div>
    </TabsContext.Provider>
  );
}

function Tab({ id, disabled = false }) {
  const { TabName, open } = useContext(TabsContext);

  return (
    <li
      className={`rounded-top w-40 cursor-pointer bg-primary px-4 py-3 text-2xl text-white transition-colors ${TabName === id && "tab-selected"} ${disabled && "disabled"}`}
      onClick={() => open(id)}
    >
      {id}
    </li>
  );
}

function Tabs({ children }) {
  return <ul className="flex items-center gap-3">{children}</ul>;
}

function Window({ id, children }) {
  const { TabName } = useContext(TabsContext);
  if (TabName !== id) return null;

  return children;
}

function Windows({ children }) {
  return (
    <div className="overflow-scroll bg-white p-8 xl:py-4 xs:px-2">
      {children}
    </div>
  );
}

NavigationTabs.Tab = Tab;
NavigationTabs.Tabs = Tabs;
NavigationTabs.Window = Window;
NavigationTabs.Windows = Windows;
export default NavigationTabs;
