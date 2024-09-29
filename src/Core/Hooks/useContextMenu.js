import { createContext, useContext } from "react";

export const ContextMenuContext = createContext();

export function useContextMenu() {
  const context = useContext(ContextMenuContext);
  if (!context)
    throw new Error(
      "ContextMenuContext was used outside of ContextMenuProvider"
    );
  return context;
}
