import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-left'>
                    <h3>Prabhat</h3>
                </div>
                <div className='footer-right'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className='copyright'>
                <p>&copy; 2024 Prabhat Tiwari. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
