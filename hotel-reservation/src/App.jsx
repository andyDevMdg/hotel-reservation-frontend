import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/> {/* Quand je suis à la racine '/' afficher l'élement Home*/}
      <Route path="/hotels" element={<List />}/>
      <Route path="/hotels/:id" element={<Hotel />}/>
      </Routes>
  );
}

export default App;
