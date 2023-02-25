import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<AboutMe />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<ContactMe />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
