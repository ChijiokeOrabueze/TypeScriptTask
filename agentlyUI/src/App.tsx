import React from 'react';
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './templates/Footer';
import Header from "./templates/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element = {<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
