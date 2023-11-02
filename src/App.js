import logo from './logo.svg';
import './App.css';
import './component/style.css';
import './component/responsive.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Home from './component/Home';
import Error from './component/Error';

function App() {
  return (
    <div className="App"  >      
      <Router>     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
