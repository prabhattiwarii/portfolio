import React from 'react';
import './Project.css';

const Project = () => {
    const projects = [
        {
            id: 1,
            img:"./cj-tech.png",
            title: "Coding Job Technology",
            desc: "Coding Job Tech is a IT Company.Coding Job Tech is a leading technology firm that connects businesses with top-tier freelance talent from around the world. Their freelancing platform enables clients to hire skilled professionals for a wide range of projects, including web development, mobile app development, graphic design, digital marketing, and more.",
            link:"https://hiring-web.vercel.app/",
            gitlink:"https://github.com/prabhattiwarii/hiring-web"
        },
        {
            id: 2,
            img: "./graduation-cap.png",
            title: "EDU-TECH",
            desc: "The Institute Website for Degree Pursuit is designed to provide comprehensive information and resources for students pursuing a degree program. It offers details about various courses, faculty members, admission procedures, and more. The website aims to streamline the admission process, enhance student engagement, and facilitate effective communication between the institute and its students.",
            link:"https://edu-tech-omega.vercel.app/",
            gitlink:"https://github.com/prabhattiwarii/Edu-Tech"
        },
        {
            id: 3,
            img: "./travel.png",
            title: "Travel World",
            desc: "Travelworld is a comprehensive travel website where you can choose your destination and explore various places. We provide the best guidance and tour services to ensure you have an unforgettable experience. Whether you're planning a solo adventure, family vacation, or romantic getaway, Travelworld has everything you need to plan your trip with ease.",
            link:"https://tourapp.pages.dev/home",
            gitlink:"https://github.com/prabhattiwarii/TOUR"
        },
        {
            id: 4,
            img: "./fitness.png",
            title: "FIT-CLUB",
            desc: "FIT-CLUB is a fitness website dedicated to helping individuals achieve their health and fitness goals. We offer personalized workout plans, nutrition advice, and expert guidance to support you on your fitness journey. Whether you're a beginner or a seasoned athlete, FIT-CLUB has everything you need to stay motivated and achieve results.",
            link:"https://fitness-amar.vercel.app/",
            gitlink:"https://github.com/prabhattiwarii/fitclub"
        },
        {
            id: 5,
            img: "./Finance-Dashboard.jpg",
            title: "Finacial Management",
            desc: "DashBoard is a comprehensive financial management dashboard designed to help individuals and businesses manage their budgets, subscriptions, loans, reports, financial advice, and savings efficiently. With features such as budget tracking, subscription management, loan tracking, detailed financial reports, personalized financial advice, and savings management tools.",
            link: "https://dashboard-pt.vercel.app/",
            gitlink: "https://github.com/prabhattiwarii/dashboard"
        },
        {
            id: 6,
            img: "./gunoxwebsolutions-logo.56e06cff47fd7da27076d4bec2c9135e.svg",
            title: "UI-UX Design",
            desc: "IT Companey offering a range of services tailored to meet your needs. Explore our website to learn more about our company, career opportunities, services, and how to get in touch with us. From our home page to our blog section, we strive to provide you with valuable information and insights. Join us on our journey.",
            link:"https://gunox-technology.vercel.app/",
            gitlink:"https://github.com/prabhattiwarii/TOUR"
        }
    ];

    return (
        <div className='project'>
            <div className="title-wrap animate__animated animate__fadeInDown">
                <h1>Featured Projects</h1>
                <p>Check out some of my latest work</p>
            </div>
            <div className="project-details animate__animated animate__fadeInUp">
                {projects.map((project) => (
                    <div className="project-item" key={project.id}>
                        <div className="img">
                            <img src={project.img} alt="" className={`${project.id === 4 ? "filter" : ""}`}/>
                        </div>
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                        <div className="cta-buttons">
                            <a href={project.link} className="live-preview-btn">Live Preview</a>
                            {/* <a href={project.gitlink} className="view-code-btn">View Code</a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
