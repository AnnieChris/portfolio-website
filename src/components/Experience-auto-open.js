import React, { useState, useEffect, useRef } from "react";
import { Container, Accordion, Badge, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "ManpowerGroup",
    role: "HubSpot CMS Developer",
    location: "Milwaukee, WI, USA",
    period: "Sep 2024 – Jan 2025",
    description:
      "Developed HubSpot CMS templates and custom modules for global sites. Collaborated with international teams to migrate and optimize landing pages using Node.js and HubL. Focused on accessibility and SEO improvements.",
    tech: ["HubSpot CMS", "HubL", "JavaScript", "jQuery", "Bootstrap", "SEO"],
  },
  {
    company: "MARS Solutions Group",
    role: "Front-End Web Developer",
    location: "Waukesha, WI, USA",
    period: "Jun 2023 – Aug 2024",
    description:
      "Built and deployed responsive React web apps using AWS S3 and DynamoDB. Collaborated with backend teams to implement REST APIs and optimize user experience with React Router and Redux.",
    tech: ["React", "Redux", "AWS S3", "DynamoDB", "HTML5", "CSS3"],
  },
  {
    company: "MARS Returnship Program",
    role: "Full-Stack Developer (Intern)",
    location: "Waukesha, WI, USA",
    period: "Feb 2022 – May 2023",
    description:
      "Worked across frontend and backend technologies including React, Java, and Spring Boot. Designed dynamic UI screens, connected REST APIs, and contributed to end-to-end development.",
    tech: ["React", "Spring Boot", "Java", "SQL Server", "MySQL", "AWS"],
  },
  {
    company: "RheinBrucke",
    role: "Web Developer",
    location: "Chennai, India",
    period: "2015 – 2015",
    description:
      "Created and maintained ERP-integrated web pages with PHP and SQL. Ensured cross-browser compatibility and improved code reusability.",
    tech: ["PHP", "ERP", "HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    company: "Samran",
    role: "PHP Developer",
    location: "Chennai, India",
    period: "2014 – 2015",
    description:
      "Built WordPress and Joomla websites and handled backend logic in PHP. Collaborated with designers to implement responsive layouts.",
    tech: ["PHP", "WordPress", "Joomla", "HTML", "CSS", "JavaScript"],
  },
  {
    company: "Fio Technologies",
    role: "Web Developer",
    location: "Chennai, India",
    period: "2013 – 2014",
    description:
      "Developed websites for clients using WordPress and Joomla. Ensured optimized performance and cross-browser compatibility.",
    tech: ["PHP", "WordPress", "Joomla", "HTML", "CSS", "JavaScript"],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  // Smooth scroll when active accordion changes
  useEffect(() => {
    if (activeIndex !== null && itemRefs.current[activeIndex]) {
      const element = itemRefs.current[activeIndex];
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [activeIndex]);

  // Auto-rotate accordion items
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === experiences.length - 1 ? 0 : prev + 1
      );
    }, 4000); // ⏱ change every 4 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">
      <Container>
        <Row className="align-items-center justify-content-center mb-4">
          <Col md={4}>
            <h2 className="fw-bold text-gradient">Professional Experience</h2>
          </Col>

          <Col md={6}>
            <Accordion activeKey={activeIndex?.toString()}>
              {experiences.map((exp, index) => (
                <Accordion.Item
                  key={index}
                  eventKey={index.toString()}
                  onClick={() => handleToggle(index)}
                  className="mb-3"
                  ref={(el) => (itemRefs.current[index] = el)}
                >
                  <Accordion.Header>
                    <div className="d-flex flex-column">
                      <span className="company">{exp.company}</span>
                      <span className="location">
                        <FaMapMarkerAlt className="me-1" />
                        {exp.location}
                      </span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h5 className="role">{exp.role}</h5>
                    <p className="period">{exp.period}</p>
                    <p className="description">{exp.description}</p>
                    <div className="tech-stack d-flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <Badge
                          key={i}
                          bg="secondary"
                          className="me-2 mb-2"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
