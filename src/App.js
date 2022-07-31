import './App.css';
import Landing from 'Pages/Landing/Landing';
import Category from 'Pages/Category/Category'
import Mariage from 'Pages/Mariage/Mariage';
import Grossesse from 'Pages/Grossesse/Grossesse';
import Couple from 'Pages/Couple/Couple';
import Bapteme from 'Pages/Bapteme/Bapteme';
import Famille from 'Pages/Famille/Famille';
import Bebe from 'Pages/Bebe/Bebe';
import Prestation from 'Pages/Prestation/Prestation'
import Nav from 'Component/Navbar/Nav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
          <Route path="/prestation" element={<Prestation />} />
          <Route path="/couple" element={<Couple />} />
          <Route path="/bapteme" element={<Bapteme />} />
          <Route path="/famille" element={<Famille />} />
          <Route path="/bebe" element={<Bebe />} />
          <Route path="/grossesse" element={<Grossesse />} />
          <Route path="/mariage" element={<Mariage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/" element={<Landing />} />
      </Routes>     
    </Router>
  );
}

export default App;
