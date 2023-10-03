
import './App.css'
import Navbar from './components/Navbar'
import Cars from './pages/Cars';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './utils/Search';
import DisplayCars from './pages/DisplayCars';

function App() {
  

  return (
    <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars/:pageNumber" element={<Cars/>} />
            <Route path='/search/:carName' element={<Search/>} />
            <Route path='/search/cars/:searchTerm' element={<DisplayCars/>} />
          </Routes>
    </Router>
  )
}

export default App
