import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './shared-components/Navbar';
import Home from './Home';
import About from './About';

function App() {
  return (
  
    <div className="App bg-gray-100">
      <header className="App-header">
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;
