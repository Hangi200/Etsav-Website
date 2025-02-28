import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/all-images/etsav_logo.png";

import "../../styles/header.css";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About Us" },
  { path: "/cars", display: "Services" },
  { path: "/contact", display: "Contact Us" },
  { path: "/blogs", display: "Blog" },
  
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    if (menuRef.current) {
      menuRef.current.classList.toggle("menu__active");
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("menu__active");
    }
  };

  return (
    <header className="header">
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            {/* Mobile Menu Icon */}
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu} aria-label="Toggle navigation"></i>
            </span>

            {/* Navigation Links */}
            <div
              className="navigation"
              ref={menuRef}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="menu">
                {/* Logo */}
                <div className="logo">
                  <img src={logo} alt="Company Logo" />
                </div>

                {/* Nav Links */}
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                    onClick={closeMenu} // Close menu on link click
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Search Box */}
            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
