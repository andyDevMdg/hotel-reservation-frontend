import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/> {/* Quand je suis à la racine '/' afficher l'élement Home*/}
      <Route path="/hotels" element={<List />}/>
      <Route path="/hotels/:id" element={<Hotel />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      </Routes>
  );
}

export default App;
