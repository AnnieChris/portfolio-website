import logo from './logo.svg';
import './App.css';
import './component/style.css';
import './component/responsive.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Home from './component/Home';
import Error from './component/Error';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App"  >         
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>       
    </div>
  );
}

export default App;
