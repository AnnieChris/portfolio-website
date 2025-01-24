import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import Typewriter from "typewriter-effect";

import DarkModeToggle from './DarkModeToggle';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import SparkleTrail from './SparkleTrail';

import annieIcon from '../images/AnnieW.jpg';
const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const pageLoading = setTimeout(() => {
      setLoading(false)
    }, 6000);
    return () => clearTimeout(pageLoading)

  }, [])

  const [darkMode, setDarkMode] = useState(false);
  const handleResumeBtn = (e) => {
    e.preventDefault();
    window.open("https://drive.google.com/file/d/16We_wbr5jDL2m5wwhmBXNs0zr6R8iOcy/view?usp=sharing", '_blank');
  }

  /* Scroll Top Button */
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const buttonVisibility = () => {
      const isScrollingDown = window.scrollY > 300;
      setShowButton(isScrollingDown);
    };
    window.addEventListener('scroll', buttonVisibility);

    return () => {
      window.removeEventListener('scroll', buttonVisibility);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div> {loading ? (
      <div className='welcome'>
        <Image src={annieIcon} alt='annie' />
        <h1><Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to my Portfolio")
              .pauseFor(2000)
              .deleteAll(200)
              .typeString("Welcome to my Portfolio")
              .start();
          }}
        /></h1>
      </div>
    ) : (
      <div className='contents'>
        <NavBar />
        {showButton && (
          <div className={`scroll-top`} >
            <button onClick={handleScrollTop} className="scroll-to-top-button">
              <FontAwesomeIcon icon={faCircleChevronUp} size="2xl" style={{ color: "#95beff", }} />
            </button>
          </div>
        )}
        <section className={`${darkMode ? 'dark' : 'light'} mode-container`}>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className='page-contents' >
            <SparkleTrail color="gold" />
            <div className='home_contents ' id='home'>
              <h1>Hi, I'm <span className='name'>Annie Esther Wilson,</span></h1>
              <p>A Passionate Web developer with expertise in crafting engaging user interfaces and web applications that contribute to overall product success.</p>
              <Button className='resume_btn' onClick={handleResumeBtn}>
                <span>Resume</span>
              </Button>
            </div>

            <div className='projects-content ' id='projects'>
              <h3>Projects</h3>
              <Projects />
            </div>

            <div className='skills-content ' id='skills'>
              <h3>Skills</h3>
              <Skills />
            </div>

            <div className='contact-content ' id='contact'>
              <h3>Contact</h3>
              <Contact />
            </div>

            <div className='footer-content ' id='footer'>
              <Footer />
            </div>
          </div>
        </section>
      </div>
    )}
    </div>
  )
}

export default Home;
