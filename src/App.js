import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Tech from './components/technology/Tech';

function App() {
  return (
    <>
      <Header/>
      <Home />
      <Tech/>
      <Footer/>
    </>
  );
}

export default App;
