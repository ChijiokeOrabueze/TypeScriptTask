import React, { useState } from 'react';
import {Routes, Route } from "react-router-dom";
import AddProperty from './pages/AddProperty';
import Home from './pages/Home';
import Property from './pages/Property';
import Footer from './templates/Footer';
import Header from "./templates/Header";


function App() {
  const [showHeaderAndFooter, setShowHeaderAndFooter] = useState<boolean>(true);
  return (
    <div className="App" >
      {showHeaderAndFooter && <Header />}
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/property/:id' element = {<Property />}/>
        <Route path='/add-property' element = {<AddProperty setShowHeaderAndFooter={setShowHeaderAndFooter} />}/>
      </Routes>
      {showHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;
