import { useState } from "react";
import { UserContext } from "./userContext"

// const user = {
//     id: 132,
//     name: 'Andres',
// }

export const UserProvider = ({children}) => {


  const [user, setUser] = useState();  
  return (
    // <UserContext.Provider value={{hola: 'Munbdo', user}}>
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
