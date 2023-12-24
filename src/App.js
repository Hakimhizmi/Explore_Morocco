import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import Game from './pages/game';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Game />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
