import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    
    <div className='darktogglebtn'>
        <Button 
         className={`bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md ${darkMode ? 'active' : ''}`}
         onClick={() => setDarkMode(!darkMode)}
         >
         {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </Button>
    </div>
  )
}

export default DarkModeToggle