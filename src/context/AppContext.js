import { createContext } from "react";

export const AppContext = createContext();

export const ContextProvider = (props) => {

  
  let user = false;

  return (
    <AppContext.Provider value={user}>
      {props.children}
    </AppContext.Provider>
  )
}