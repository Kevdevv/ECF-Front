import './App.css';
import Landing from 'Pages/Landing/Landing';
import Prestation from 'Pages/Prestation/Prestation'
import Nav from 'Component/Navbar/Nav'
import Footer from 'Component/Footer/Footer'
import Contact from 'Pages/Contact/ContactForm'
import Gallery from 'Pages/Gallery/Gallery'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
          <Route path="/gallerie" element={<Gallery />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/prestation" element={<Prestation />} />
          <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />     
    </Router>
  );
}

export default App;
