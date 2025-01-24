import React, { useState, useRef } from 'react';
import { Overlay, Popover, ProgressBar } from 'react-bootstrap';

const skillslist = [
  {
    id: "0",
    skill: "HTML5",
    range: "Expert",
    bar: 90,
  },
  {
    id: "1",
    skill: "CSS3",
    range: "Expert",
    bar: 90,
  },
  {
    id: "2",
    skill: "Javascript ES6",
    range: "Expert",
    bar: 90,
  },
  {
    id: "3",
    skill: "React JS",
    range: "Expert",
    bar: 90,
  },
  {
    id: "4",
    skill: "Redux JS",
    range: "Good",
    bar: 70,
  },
  {
    id: "5",
    skill: "Node JS",
    range: "Good",
    bar: 70,
  },
  {
    id: "6",
    skill: "Bootstrap",
    range: "Expert",
    bar: 90,
  },
  {
    id: "7",
    skill: "HubSpot",
    range: "Expert",
    bar: 90,
  },
  {
    id: "8",
    skill: "Java",
    range: "Average",
    bar: 50,
  },
  {
    id: "9",
    skill: "Spring Boot",
    range: "Average",
    bar: 50,
  },
  {
    id: "10",
    skill: "AWS",
    range: "Good",
    bar: 80,
  },
  {
    id: "11",
    skill: "Git",
    range: "Expert",
    bar: 90,
  },
  {
    id: "12",
    skill: "Github",
    range: "Expert",
    bar: 90,
  },
  {
    id: "13",
    skill: "GitLab",
    range: "Expert",
    bar: 90,
  },
  {
    id: "14",
    skill: "Postman",
    range: "Good",
    bar: 80,
  },
  {
    id: "15",
    skill: "Jira",
    range: "Good",
    bar: 80,
  },
  {
    id: "16",
    skill: "Agile Methodologies",
    range: "Good",
    bar: 80,
  },
  {
    id: "17",
    skill: "Figma",
    range: "Expert",
    bar: 90,
  },
  {
    id: "18",
    skill: "Adobe Photoshop",
    range: "Good",
    bar: 70,
  },
  {
    id: "19",
    skill: "Sharepoint",
    range: "Good",
    bar: 70,
  },
  {
    id: "20",
    skill: "MS Office",
    range: "Expert",
    bar: 90,
  },
  {
    id: "21",
    skill: "PHP",
    range: "Average",
    bar: 50,
  },
  {
    id: "22",
    skill: "Joomla",
    range: "Average",
    bar: 50,
  },
  {
    id: "23",
    skill: "Wordpress",
    range: "Average",
    bar: 50,
  },


];

const Skills = () => {

  const [overlayContent, setOverlayContent] = useState(null);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleMouseEnter = (e, sk) => {
    e.preventDefault();
    setTarget(e.target);
    setOverlayContent(sk);
  };

  const handleMouseLeave = () => {
    setTarget(null);
    setOverlayContent(null);
  };
  const handleClick = (e, sk) => {
    setTarget(e.target);
    setOverlayContent(sk);
    setTimeout(() => {
      setTarget(null);
      setOverlayContent(null);
    }, 10000);
  };
  const handleOverlayExited = () => {
    setTarget(null);
    setOverlayContent(null);
  };

  return (
    <ul className='skillsets' ref={ref}>
      {skillslist.map((sk) => (
        <li
          key={sk.id}
          /* onMouseEnter={(e) => handleMouseEnter(e, sk)}
          onMouseLeave={handleMouseLeave} */
          onClick={(e) => handleClick(e, sk)} 
          
        >
          {sk.skill}
          <Overlay
            show={target !== null}
            target={target}
            placement="top"
            container={ref}
            containerPadding={20}
            onExited={handleOverlayExited}
            style={{ transition: 'opacity 0.3s ease-in-out' }}
          >
            <Popover id="popover-contained">
              <Popover.Header as="h4">{overlayContent?.range}</Popover.Header>
              <Popover.Body>
                <ProgressBar variant="success" now={overlayContent?.bar} active style={{ transition: 'width 0.3s ease-in-out' }}/>
              </Popover.Body>
            </Popover>
          </Overlay>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
