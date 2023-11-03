import React, { useState } from 'react';
import NavBar from './NavBar';
import { Button, Image } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link, useLocation } from "react-router-dom";

import DarkModeToggle from './DarkModeToggle';
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import PageUnderConstruction from './PageUnderConstruction';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <section className={`${darkMode ? 'dark' : 'light'} mode-container`}>
      {/* <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      {/* <NavBar /> */}
      <div className='home' id='home'>
        <PageUnderConstruction/>

      </div>
    </section>
  )
}

export default Home