import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";



export const CustomHookForm = () => {



    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const {username, email, password} = formState;

    useEffect(() => {
        console.log("useEffect was summoned");
    }, []);

    useEffect(() => {
        console.log("formState changed");
    }, [formState]);

    useEffect(() => {
        console.log("email changed");
    }, [email]);


    
    

  return (
    <>
        <h1>Custom Hook Form</h1>
        <hr />
        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />
        

        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="type a password"
            name="email"
            value={email}
            onChange={onInputChange}
        />

        <input 
            type="password" 
            className="form-control mt-2"
            placeholder="type a password"
            name="password"
            value={password}
            onChange={onInputChange}
        />

        <button className="btn btn-light mt-2" onClick={ onResetForm } >Borrar</button>
    </>
  )
}
