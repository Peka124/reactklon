import './App.css';
import Login from './strane/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Knjige from './strane/Knjige.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="knjige" element={<Knjige />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
