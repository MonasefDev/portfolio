import { Link, NavLink } from "react-router-dom";

import dev from "../../../developer.json";
import "./navbar.scss";
function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <div id="mobile-menu" className="relative z-10 w-full lg:hidden">
        <div
          id="mobile-header"
          className="flex h-16 w-full cursor-pointer items-center justify-between"
        >
          <Link
            className="mx-5 flex h-full  items-center font-fira_retina text-menu-text"
            to="/"
          >
            {dev.logo_name}
          </Link>
          {isMenuOpen ? (
            <img
              src="../icons/burger-close.svg"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="mx-5 my-auto h-5 w-5 "
              alt="menu-icon"
            />
          ) : (
            <img
              src="../icons/burger.svg"
              onClick={() => {
                setIsMenuOpen(true);
              }}
              className="mx-5 my-auto h-5 w-5 "
              alt="menu-icon"
            />
          )}
        </div>

        {isMenuOpen && (
          <div id="menu" className="z-99  bg-mobile-menu-blue lg:hidden">
            <NavLink
              id="nav-link-mobile"
              to="/"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              _hello
            </NavLink>

            <NavLink
              id="nav-link-mobile"
              to="/about-me"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              _about-me
            </NavLink>

            <NavLink
              id="nav-link-mobile"
              to="/projects"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              _projects
            </NavLink>

            <NavLink
              id="nav-link-mobile"
              to="/contact-me"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              _contact-me
            </NavLink>
          </div>
        )}
      </div>

      <header id="navbar" className="hidden w-full flex-col lg:flex">
        <nav className="border-bot flex h-14 w-full justify-between">
          <div className="flex">
            <Link id="nav-logo" to="/">
              {dev.logo_name}
            </Link>

            <NavLink id="nav-link" to="/">
              _hello
            </NavLink>

            <NavLink id="nav-link" to="/about-me">
              _about-me
            </NavLink>

            <NavLink id="nav-link" to="/projects">
              _projects
            </NavLink>
          </div>

          <NavLink id="nav-link-contact" to="/contact-me">
            _contact-me
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
