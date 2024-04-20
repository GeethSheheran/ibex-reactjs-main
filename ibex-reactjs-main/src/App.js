import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Footer from './Components/Footer';
import ServiceHome from './Components/Sevices/ServiceHome';
import AboutHome from './Components/About/AboutHome';
import WorksHome from './Components/Works/WorksHome'
import ContactHome from './Components/Contact/ContactHome';
import ScollToTop from './Components/ScrollToTop'
import CorporateHome from './Components/Sevices/Portfolios/CorporateHome'
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
      <Navbar />
      <ScollToTop />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/services" element={<ServiceHome />} />
          <Route path="/corporate" element={<CorporateHome />} />
        <Route path='/about' element={<AboutHome />} />
        <Route path='/works' element={<WorksHome />} />
        <Route path='/contact' element={<ContactHome />} />
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
