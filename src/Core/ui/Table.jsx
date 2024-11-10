/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import Empty from "./Empty";
import { useContextMenu } from "../Hooks/useContextMenu";
import ContextMenu from "./ContextMenu";
const TableContext = createContext();

function Table({ children, columns, isSmall = false }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <ContextMenu>
        <div className="max-w-full overflow-x-auto">
          <div
            className={` ${isSmall ? "h-[330px] min-w-[1200px]" : "h-[660px] min-w-[1500px]"} overflow-scroll rounded-md bg-gray-100`}
          >
            {children}
          </div>
        </div>
      </ContextMenu>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      className={`grid grid-cols-[1fr_auto] bg-HeaderColor px-6 py-3 text-lg font-semibold`}
    >
      <div className={`grid ${columns}`}>{children}</div>
      <div className="hidden lg:block lg:w-4"></div>
    </div>
  );
}

function Body({ items, render }) {
  if (!items?.length) return <Empty>No data to show at the moment</Empty>;

  return (
    <ul className={`min-h-72 divide-y`}>
      {items.map((item, index) => render(item, index % 2 !== 0))}
    </ul>
  );
}

function Row({ children, isDark, id }) {
  const { columns } = useContext(TableContext);
  const { openId } = useContextMenu();

  return (
    <div
      className={`grid ${columns} border-r-2 p-4 text-lg text-slate-800 ${
        id === openId ? "bg-secondary" : isDark ? "bg-gray-100" : "bg-gray-50"
      }`}
    >
      {children}
    </div>
  );
}

Table.Row = Row;
Table.Header = Header;
Table.Body = Body;

export default Table;
