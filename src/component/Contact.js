import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div>
      <Button className='contact_btn'
        onClick={() => window.location = 'mailto:annieesther3@gmail.com'}>
        <span>Email Me</span>
      </Button>
      <ul className='social_media_icons'>
        <li>
          <a href="https://www.linkedin.com/in/annie-esther-wilson-063249100/" target="_blank">
            <i className="fa-brands fa-linkedin-in icon"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com" target="_blank">
            <i className="fab fa-github icon"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" onClick={() => window.location = 'mailto:annieesther3@gmail.com'}>
            <i className="fa-solid fa-envelope icon"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact