/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import Empty from "../../src/GlobalUI/Empty";
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
      className={`bg-HeaderColor px-6 py-3 grid ${columns} font-semibold text-lg`}
    >
      {children}
    </div>
  );
}

function Body({ items, render }) {
  if (!items.length) return <Empty>No data to show at the moment</Empty>;

  return (
    <ul className={`bg-sectionColor  divide-y`}>
      {items.data.map((item, index) => render(item, index % 2 !== 0))}
    </ul>
  );
}

function Row({ children, isDark, id }) {
  const { columns } = useContext(TableContext);
  const { openId } = useContextMenu();

  return (
    <div
      className={`grid ${columns} p-4 text-slate-800 text-lg ${
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
