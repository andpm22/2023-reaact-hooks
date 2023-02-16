import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="nav">
        <Link to="/" >UseContext</Link>
        <NavLink
            className={({isActive}) => `nav-link ${isActive ? 'active': ''}`}
            to="/">
            Home
        </NavLink>
        <NavLink
            className={({isActive}) => `nav-link ${isActive ? 'active': ''}`}
            to="/about">
            About
        </NavLink>
        <NavLink
            className={({isActive}) => `nav-link ${isActive ? 'active': ''}`}
            to="/login">
            Login
        </NavLink>

    </div>
  )
}
