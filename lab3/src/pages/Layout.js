import { Outlet, NavLink } from "react-router-dom";
import logo from "../Assets/logo.svg";

const Layout = () => {
  return (
    <>
      <nav className="fixed-navigation">
        <img className="logo" src={logo} alt="arrow" />
        <ul className="nav-links">
            <li><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li><NavLink to="/browseHotels" className="nav-link">Browse</NavLink></li>
            <li><NavLink to="/#rent" className="nav-link">Rent with us</NavLink></li>
            <li><NavLink to="/" className="nav-link">Sign up</NavLink></li>
            <button className="button primary">Log in</button>
        </ul>
        <button className="button primary hidden">Menu</button>
        </nav>

        <Outlet />
    </>
  )
};

export default Layout;
