import { Outlet, NavLink } from "react-router-dom";
import logo from "../Assets/logo.svg";
import { logout } from "../data/userService";
import { useUser } from "../data/userService";
import { useState } from "react";
import { SignupModal, LoginModal } from "../data/AuthModals";

const Layout = () => {
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  const user = useUser();

  return (
    <>
      <nav className="fixed-navigation">
        <img className="logo" src={logo} alt="arrow" />
        <ul className="nav-links">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/browseHotels" className="nav-link">Browse</NavLink></li>
          <li><NavLink to="/#rent" className="nav-link">Rent with us</NavLink></li>
          {!!user || <li><NavLink to="/" className="nav-link" onClick={() => setSignupModalIsOpen(true)}>Sign up</NavLink></li>}
          {!!user || <button className="button primary" onClick={() => setLoginModalIsOpen(true)}>Log in</button>}
          {!!user && <button className="button" onClick={logout}>Log out</button>}
        </ul>
        <button className="button primary hidden">Menu</button>
      </nav>

      <Outlet />

      <SignupModal
        modalIsOpen={signupModalIsOpen}
        setModalIsOpen={setSignupModalIsOpen}
      />

      <LoginModal
        modalIsOpen={loginModalIsOpen}
        setModalIsOpen={setLoginModalIsOpen}
      />
    </>
  )
};

export default Layout;
