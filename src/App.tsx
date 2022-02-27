import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/homepage';
import About from './pages/about';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
