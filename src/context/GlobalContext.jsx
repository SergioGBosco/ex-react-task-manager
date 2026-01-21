import { createContext } from "react";
import useTasks from "../hooks/useTasks";


export const GlobalContext = createContext();

export function GlobalProvider({ children }) {

  const taskOperation = useTasks()

  return (
    <GlobalContext.Provider value={{ ...taskOperation }}>
      {children}
    </GlobalContext.Provider>
  )
}