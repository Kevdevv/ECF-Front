import './App.css';
import Header from 'Component/Header/Header';
import Landing from 'Pages/Landing/Landing';
import Category from 'Pages/Category/Category'
import Mariage from 'Pages/Mariage/Mariage';
import Grossesse from 'Pages/Grossesse/Grossesse';
import Couple from 'Pages/Couple/Couple';
import Bapteme from 'Pages/Bapteme/Bapteme';
import Famille from 'Pages/Famille/Famille';
import Bebe from 'Pages/Bebe/Bebe';
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
