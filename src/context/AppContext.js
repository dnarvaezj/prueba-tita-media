import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const getInitialState = () => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : ''
}

export const ContextProvider = (props) => {

  const [user, setUser] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <AppContext.Provider value={{
      user,
      setUser
    }}>
      {props.children}
    </AppContext.Provider>
  )
}