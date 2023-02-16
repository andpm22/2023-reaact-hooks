import { Navigate, Route, Routes, Link } from "react-router-dom"
import {HomePage}  from "./HomePage"
import {About}  from "./About"
import {Login}  from "./Login"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar/>
        <h1>MainApp</h1>
        <hr />
        <Routes>
            <Route path="/" element= {<HomePage/>} />
            <Route path="/login" element= {<Login/>} />
            <Route path="/about" element= {<About/>} />

            {/* <Route path="/*" element={<Login/>}/> */}
            <Route path="/*" element={<Navigate to="/about"/>}/>
          </Routes>
        
    </UserProvider>
  )
}
