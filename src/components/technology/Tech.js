import React from 'react';
import './Tech.css';

// Import images for technologies
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import bootstrapIcon from "../../assets/bootstrap.svg";
import tailwindIcon from "../../assets/talwind.svg";
import jsIcon from "../../assets/js.svg";
import reactIcon from "../../assets/react.svg";
import nextjsIcon from "../../assets/nextjs.svg";
import mongodbIcon from "../../assets/mongodb.svg";
import sqlIcon from "../../assets/sql.jpeg";
import vsIcon from "../../assets/vs.svg";


const Tech = () => {
  return (
    <div className='tech-wrap'>
        <h3 className="animate__animated animate__fadeInDown">Technologies I Use</h3>
        <p className="animate__animated animate__fadeInUp">Technologies I've been working with recently</p>
        <div className="technologies">
            <div className="technology animate__animated animate__fadeInLeft">
                <img src={htmlIcon} alt="HTML" />
                <h4>HTML</h4>
                <p>HyperText Markup Language</p>
            </div>
            <div className="technology animate__animated animate__fadeInLeft">
                <img src={cssIcon} alt="CSS" />
                <h4>CSS</h4>
                <p>Cascading Style Sheets</p>
            </div>
            <div className="technology animate__animated animate__fadeInLeft">
                <img src={bootstrapIcon} alt="Bootstrap" />
                <h4>Bootstrap</h4>
                <p>Front-end framework for developing responsive and mobile-first websites</p>
            </div>
            <div className="technology animate__animated animate__fadeInLeft">
                <img src={tailwindIcon} alt="Tailwind CSS" />
                <h4>Tailwind CSS</h4>
                <p>A utility-first CSS framework</p>
            </div>
            <div className="technology animate__animated animate__fadeInLeft">
                <img src={jsIcon} alt="JavaScript" />
                <h4>JavaScript</h4>
                <p>A high-level, interpreted scripting language</p>
            </div>
            <div className="technology animate__animated animate__fadeInLeft">
                <img src={reactIcon} alt="React" />
                <h4>React</h4>
                <p>A JavaScript library for building user interfaces</p>
            </div>
            <div className="technology animate__animated animate__fadeInLeft">
                <img src={nextjsIcon} alt="Next.js" />
                <h4>Next.js</h4>
                <p>A React framework for production</p>
            </div>
            <div className="technology animate__animated animate__fadeInLeft">
                <img src={mongodbIcon} alt="MongoDB" />
                <h4>MongoDB</h4>
                <p>A cross-platform document-oriented NoSQL database</p>
            </div>
            <div className="technology animate__animated animate__fadeInLeft">
                <img src={sqlIcon} alt="SQL" />
                <h4>SQL</h4>
                <p>Structured Query Language</p>
            </div>
            <div className="technology animate__animated animate__fadeInLeft">
                <img src={vsIcon} alt="Visual Studio" />
                <h4>Visual Studio</h4>
                <p>An integrated development environment (IDE)</p>
            </div>
        </div>
    </div>
  );
};

export default Tech;
