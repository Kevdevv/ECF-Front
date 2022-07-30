import './App.css';
import Header from 'Header/Header';
import Landing from 'Landing/Landing';
import Category from 'Category/Category'
import Mariage from 'Mariage/Mariage';
import Grossesse from 'Grossesse/Grossesse';
import Couple from 'Couple/Couple';
import Bapteme from 'Bapteme/Bapteme';
import Famille from 'Famille/Famille';
import Bebe from 'Bebe/Bebe';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
    <Router>
        <Header />
      <Routes>
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
    </div>
  );
}

export default App;
