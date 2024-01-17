import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className='coyrights'>
        Copyright <FontAwesomeIcon icon={faCopyright} /> {year} 
        <a href="/portfolio-website">Annie Esther Wilson</a>
    </div>
  )
}

export default Footer
