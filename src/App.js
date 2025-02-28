import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './shared-components/Navbar';
import Home from './Home';
import About from './About';
import Altabout from './AltAbout'
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import AltAbout from './AltAbout';
import ScrollToTop from './shared-components/ScrollToTop';

function App() {
  return (
  
    <div className="App bg-gray-100">
      <header className="App-header">
          <Router>
            <ScrollToTop/>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AltAbout />} />
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
