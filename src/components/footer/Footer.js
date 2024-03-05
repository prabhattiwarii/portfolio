import React from 'react';
import './Footer.css';
import linkdin from "../../assets/linkdin.svg"
import github from "../../assets/git.svg"
import phone from "../../assets/phone.svg"
import email from "../../assets/email.svg"
import insta from "../../assets/insta.svg"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-left'>
                    <h3>Prabhat</h3>
                </div>
                <div className='footer-middle'>
                    <div className="phone"><a href="tel:9301829416"> <img src={phone} alt="" /> +9301829416</a></div>
                    <div className="email"><a href="mailto:prabhattiwari9629@gmail.com"> <img src={email} alt="" /> prabhattiwari9629@gmail.com</a></div>
                </div>
                <div className='footer-right'>
                    <ul>
                        <li><a href='https://github.com/prabhattiwarii'><img src={github} alt="" /></a></li>
                        <li><a href='https://instagram.com/anu_t__'><img src={insta} alt="" /></a></li>
                        <li><a href='https://www.linkedin.com/in/prabhattiwarii?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '><img src={linkdin} alt="" /></a></li>
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
