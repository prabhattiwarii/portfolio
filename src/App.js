import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Tech from './components/technology/Tech';
import Project from './components/project/Project';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Header/>
      <Home />
      <Tech/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
