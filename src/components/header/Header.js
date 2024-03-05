import React from 'react'
import "./Header.css"
import {Link} from 'react-scroll';

const Header = () => {
    return (
        <div className='header-wrap'>
            <div className="name">Prabhat Tiwari</div>
            <ul>
                <li><Link to="home" smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to="tech-wrap" smooth={true} offset={-145} duration={500}>TechStack</Link></li>
                <li><Link to="project" smooth={true} offset={-70} duration={500}>Project</Link></li>
                <li><Link to="about" smooth={true} offset={-140} duration={500}>About</Link></li>
                <li><Link to="contact" smooth={true} offset={-150} duration={500}>Conatct</Link></li>
            </ul>
        </div>
    )
}

export default Header