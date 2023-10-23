import React from "react";
import bg from "../../assets/intro.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
import "./intro.css";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          Je suis <span className="introName">Aboubacar</span>
          <br /> Développeur fullstack
        </span>
        <p className="introPara">
          Je suis un développeur fullstack basé à Marseille, <br/> spécialisé dans la
          création d'applications Web et mobiles, <br/>
          et je suis le fondateur de <span className="introName">Innotech Academy</span>
        </p>
        <Link to="services" smooth={true} duration={1000}>
          <button className="btn">
            <img src={btnImg} alt="embauchezmoif" className="btnImg" />
            <span> Embauchez-moi</span>
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;

