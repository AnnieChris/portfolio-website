import React, { useState, useRef, useEffect } from "react";
import { Container, Accordion, Badge, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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

export default function Experience({ id }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const refs = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Smooth scroll to opened accordion item
  useEffect(() => {
    if (activeIndex !== null && refs.current[activeIndex]) {
      refs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeIndex]);

  return (
    <section id={id} className="experience-section py-5" data-aos="fade-left">
      <Container>
        <Row className="align-items-center justify-content-center mb-4">
          <Col md={4}>
            <motion.h2
              className="fw-bold text-gradient"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professional Experience
            </motion.h2>
          </Col>

          <Col md={6}>
            <Accordion activeKey={activeIndex !== null ? activeIndex.toString() : null}>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  ref={(el) => (refs.current[index] = el)}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Accordion.Item
                    eventKey={index.toString()}
                    className="mb-3 border-0 rounded-3"
                  >
                    <Accordion.Header onClick={() => handleToggle(index)}>
                      <div
                        className="d-flex flex-column w-100"
                        style={{ transition: "transform 0.2s ease" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.02)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      >
                        <span className="company fw-semibold">{exp.company}</span>
                        <span className="location text-muted small">
                          <FaMapMarkerAlt className="me-1" />
                          {exp.location}
                        </span>
                      </div>
                    </Accordion.Header>

                    <Accordion.Body
                      as={motion.div}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h5 className="role text-secondary fw-semibold">{exp.role}</h5>
                      <p className="period small text-muted mb-2">{exp.period}</p>
                      <p className="description">{exp.description}</p>
                      <div className="tech-stack d-flex flex-wrap gap-2 mt-2">
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
                </motion.div>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
