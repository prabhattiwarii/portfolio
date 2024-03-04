import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className='header-wrap'>
            <div className="name">Prabhat Tiwari</div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">TechStack</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Conatct</a></li>
            </ul>
        </div>
    )
}

export default Header