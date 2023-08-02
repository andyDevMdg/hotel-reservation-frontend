import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/> {/* Quand je suis à la racine '/' afficher l'élement Home*/}
      </Routes>
  );
}

export default App;
