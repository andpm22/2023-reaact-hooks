import { useContext } from "react"
import { UserContext } from "./context/userContext"


export const HomePage = () => {


  const {user} = useContext(UserContext)
    return (
      <>
          <h1>Home <small>{user?.name}</small></h1>
          <hr />
          {JSON.stringify(user, null, 4)}

        
        
      </>
    )
  }