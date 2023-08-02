import { Routes, Route } from 'react-router-dom';
import {} from './pages/Home/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route> {/* Quand je suis à la racine '/' afficher l'élement Home*/}
      </Routes>
  )
}

export default App;
