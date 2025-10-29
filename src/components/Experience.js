import { useState, useRef, useEffect } from "react";
import { Container, Accordion, Badge, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import "aos/dist/aos.css";

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
    company: "RheinBrücke IT Consulting",
    role: "Web Developer",
    location: "Chennai, India",
    period: "2015 – 2015",
    description:
      "Created and maintained ERP-integrated web pages with PHP and SQL. Ensured cross-browser compatibility and improved code reusability.",
    tech: ["PHP", "ERP", "HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    company: "Samran Technologies",
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
  const [activeIndex, setActiveIndex] = useState(null);
  const refs = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section py-5" data-aos="fade-up" data-aos-delay="100">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={4}>
            <h2 className="fw-bold text-gradient" data-aos="fade-down" data-aos-delay="200">
              Professional Experience
            </h2>
          </Col>
          <Col md={6}>
            <Accordion activeKey={activeIndex !== null ? activeIndex.toString() : null}>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={(el) => (refs.current[index] = el)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="mb-3 rounded-3 exp-item"
                >
                  <Accordion.Item
                    eventKey={index.toString()}                    
                  >
                    <Accordion.Header onClick={() => handleToggle(index)}>
                      <div className="d-flex flex-column">
                        <span className="company fw-semibold">{exp.company}</span>
                        <span className="location text-muted small">
                          <FaMapMarkerAlt className="me-1" />
                          {exp.location}
                        </span>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <h6 className="fw-semibold text-secondary role">{exp.role}</h6>
                      <p className="fs-7 mb-2 text-muted period">{exp.period}</p>
                      <p className="fs-7 description">{exp.description}</p>
                      <div className="d-flex gap-2 tech-stack">
                        {exp.tech.map((t, i) => (
                          <Badge
                            key={i}
                            bg="secondary"
                            className="tech-badge p-2 fw-medium"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
