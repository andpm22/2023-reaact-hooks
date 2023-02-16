import { useContext } from "react";
import { UserContext } from "./context/userContext";


export const Login = () => {

  const {user, setUser} = useContext(UserContext);

    return (
      <>
          <h1>Login</h1>
          <hr />
          <pre>
            {JSON.stringify(user, null, 3)}
          </pre>

          <button
            className="btn btn-primary"
            onClick={() => {setUser({
              id:111, name:"Juan",})
            }}
          >
            Crear usuario
          </button>
      </>
    )
  }
  