import logo from './logo.svg';
import './App.css';
import './component/style.css';
import './component/responsive.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Home from './component/Home';
import Error from './component/Error';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Skills from './component/Skills';
import NavBar from './component/NavBar';
import ViewMoreProjects from './component/ViewMoreProjects';

function App() {
  return (
    <div className="App"  >
      <Router>
        <Routes>
          <Route path='/portfolio-website' exact element={<Home />} />
          <Route path='*' element={<Error />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/viewmore' element={<ViewMoreProjects />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
