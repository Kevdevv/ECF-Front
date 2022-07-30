import './App.css';
import Header from 'Header/Header';
import Landing from 'Landing/Landing';
import Category from 'Category/Category'
import Mariage from 'Mariage/Mariage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
    <Router>
        <Header />
      <Routes>
          <Route path="/mariage" element={<Mariage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
