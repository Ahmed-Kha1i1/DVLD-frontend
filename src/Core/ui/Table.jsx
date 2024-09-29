/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import Empty from "./Empty";
import { useContextMenu } from "../Hooks/useContextMenu";
const TableContext = createContext();

function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div>{children}</div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      className={`grid bg-HeaderColor px-6 py-3 ${columns} text-lg font-semibold`}
    >
      {children}
    </div>
  );
}

function Body({ items, render }) {
  if (!items.length) return <Empty>No data to show at the moment</Empty>;

  return (
    <ul className={`divide-y bg-sectionColor`}>
      {items.data.map((item, index) => render(item, index % 2 !== 0))}
    </ul>
  );
}

function Row({ children, isDark, id }) {
  const { columns } = useContext(TableContext);
  const { openId } = useContextMenu();

  return (
    <div
      className={`grid ${columns} p-4 text-lg text-slate-800 ${
        id === openId ? "bg-secondary" : isDark ? "bg-gray-100" : ""
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
