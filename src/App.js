import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import './App.css';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
