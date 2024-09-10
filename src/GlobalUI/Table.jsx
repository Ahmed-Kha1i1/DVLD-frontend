/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import Empty from "../../src/GlobalUI/Empty";
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
    <ul className={`bg-sectionColor px-6 divide-y`}>
      {items.data.map(render)}
    </ul>
  );
}

function Row({ children }) {
  //const { columns } = useContext(TableContext);
  return <div className="columns">{children}</div>;
}

Table.Row = Row;
Table.Header = Header;
Table.Body = Body;

export default Table;
