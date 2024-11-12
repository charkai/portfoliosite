import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './shared-components/Navbar';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';

function App() {
  return (
  
    <div className="App bg-gray-100">
      <header className="App-header">
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/education" element={<Education/>} />
            </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;
