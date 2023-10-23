import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          to="intro"
          smooth={true}
          duration={500}
          className="desktopMenuLink"
          activeClass="active"
          spy={true}
          offset={-100}
        >
          Accueil
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="desktopMenuLink"
          activeClass="active"
          spy={true}
          offset={-100}
        >
          Services
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="desktopMenuLink"
          activeClass="active"
          spy={true}
          offset={-100}
        >
          Projets réalisés
        </Link>
        <Link
          to="clients"
          smooth={true}
          duration={500}
          className="desktopMenuLink"
          activeClass="active"
          spy={true}
          offset={-100}
        >
          Partenaires
        </Link>
      </div>
      <Link
        to="contact"
        smooth={true}
        duration={1000}
        className="desktopMenuBtn"
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Me contacter
      </Link>

      <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          to="intro"
          smooth={true}
          duration={500}
          className="listItem"
          activeClass="active"
          spy={true}
          offset={-100}
          onClick={() => setShowMenu(false)}
        >
          Accueil
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="listItem"
          activeClass="active"
          spy={true}
          offset={-100}
          onClick={() => setShowMenu(false)}
        >
          Services
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="listItem"
          activeClass="active"
          spy={true}
          offset={-100}
          onClick={() => setShowMenu(false)}
        >
          Projets réalisés
        </Link>
        <Link
          to="clients"
          smooth={true}
          duration={500}
          className="listItem"
          activeClass="active"
          spy={true}
          offset={-100}
          onClick={() => setShowMenu(false)}
        >
          Partenaires
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="listItem"
          activeClass="active"
          spy={true}
          offset={-100}
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
