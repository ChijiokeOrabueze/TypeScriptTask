import React from 'react';
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Property from './pages/Property';
import Footer from './templates/Footer';
import Header from "./templates/Header";


function App() {
  return (
    <div className="App" >
      <Header />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/property/:id' element = {<Property />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
