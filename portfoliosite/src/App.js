import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './shared-components/Navbar';
import Home from './Home';

function App() {
  return (
  
    <div className="App">
      <header className="App-header">
          <Navbar/>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;
