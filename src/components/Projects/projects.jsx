import React from 'react'
import "./projects.css";
import Portfolio1 from "../../assets/portfolio-1.jpg";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
import Portfolio7 from "../../assets/portfolio-7.jpg";
import Portfolio8 from "../../assets/portfolio-8.jpg";
import Portfolio9 from "../../assets/portfolio-9.jpg";


const Projects = () => {
  return (
    <section id="projects">
      <h2 className='projectTitle'>
        Projets récents
      </h2>
      <span className='projectsDesc'>
        Je fais attention aux détails et j'aime créer des sites web propres, uniques et beaux. <br/>
        Voici quelques-uns de mes projets récents.
      </span>
      <div className='projectsImgs'>
        <img src={Portfolio7} alt="" className='projectsImg' />
        <img src={Portfolio1} alt="" className='projectsImg' />
        <img src={Portfolio2} alt="" className='projectsImg' />
        <img src={Portfolio8} alt="" className='projectsImg' />
        <img src={Portfolio9} alt="" className='projectsImg' />
        <img src={Portfolio3} alt="" className='projectsImg' />
        <img src={Portfolio4} alt="" className='projectsImg' />
        <img src={Portfolio5} alt="" className='projectsImg' />
        <img src={Portfolio6} alt="" className='projectsImg' />
      </div>
      <button className='projectsBtn'>Voir plus</button>
    </section>
  )
}

export default Projects
