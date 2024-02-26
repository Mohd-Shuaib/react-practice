
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Contact from './Contact';
import Services from './Services';
import About from './About';
import NoPage from './NoPage';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (

    <>
  <BrowserRouter>
  <Navbar />
  <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
  </Routes>
  <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
