import React from 'react';
import './Home.css';
import img from "../../assets/pt-profile.jpg"
import resumeFile from "../../assets/Prabhat-Tiwari.pdf";

const Home = () => {
  return (
    <div className='home'>
        <div className="content-wrap">
            <h1 className="animate__animated animate__fadeInDown">Hi👋,</h1>
            <h2 className="animate__animated animate__fadeInDown"> I am a Prabhat Tiwari</h2>
            <div className="text animate__animated animate__fadeInUp">
                I'm a passionate web developer with expertise in creating beautiful and functional websites. 
                Let's collaborate and bring your ideas to life!
            </div>
            <a href={resumeFile} download>
                <button className="btn animate__animated animate__fadeInUp">Resume</button>
            </a>
        </div>
        <div className="image-wrap animate__animated animate__fadeInRight">
            <img src={img} alt="Prabhat Tiwari" />
        </div>
    </div>
  );
};

export default Home;
