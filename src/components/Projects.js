import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, Tab, Button, Container, Card, Row, Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = {
  hubspot: [
    {
      title: "ManpowerGroup WEF",
      description: "HubSpot landing page designed for the World Economic Forum campaign.",
      github: "",
      demo: "https://go.manpowergroup.com/wef",
    },
    {
      title: "Talent Shortage",
      description: "Dynamic HubSpot CMS page powered by HubDB with data-driven visuals.",
      github: "",
      demo: "https://go.manpowergroup.com/talent-shortage",
    },
    {
      title: "Accelerating Adaptability",
      description: "HubSpot campaign page highlighting adaptability trends.",
      github: "",
      demo: "https://go.manpowergroup.com/accelerating-adaptability",
    },
    {
      title: "MEOS",
      description: "HubSpot custom module page for the Manpower Employment Outlook Survey.",
      github: "",
      demo: "https://go.manpowergroup.com/meos",
    },
    {
      title: "Cake Shop",
      description: "HubSpot blog template with playful styling and dynamic listings.",
      github: "",
      demo: "http://47172785.hs-sites.com/cake-shop",
    },
    {
      title: "Adorable Cats",
      description: "HubSpot blog template with playful styling and dynamic listings.",
      github: "",
      demo: "http://47172785.hs-sites.com/adorable-cats",
    },
    {
      title: "Logoipsum",
      description: "HubSpot blog template with playful styling and dynamic listings.",
      github: "",
      demo: "http://47172785.hs-sites.com/logoipsum",
    },
  ],
  react: [
    {
      title: "Zippy App",
      description: "Role based dashboard performing CRUD operations using AWS services.",
      github: "",
      demo: "http://zippy-react-app.s3-website-us-east-1.amazonaws.com/",
    },
    {
      title: "Weather App",
      description: "Real-time weather forecast using OpenWeather API with responsive UI.",
      github: "https://github.com/AnnieChris/weather-app",
      demo: "https://anniechris.github.io/weather-app/",
    },
    {
      title: "Calculator App",
      description: "Simple and modern calculator built using React hooks and reusable components.",
      github: "https://github.com/AnnieChris/calculator-app",
      demo: "https://anniechris.github.io/calculator-app/",
    },
    {
      title: "E-Commerce App",
      description: "React-based shopping site with product filtering, cart, and checkout flow.",
      github: "https://github.com/AnnieChris/e-commerce-app",
      demo: "https://anniechris.github.io/e-commerce-app/",
    },
    {
      title: "Budget Planner",
      description: "React-based budgeting app with expense tracking and financial insights.",
      github: "https://github.com/AnnieChris/budget-planner",
      demo: "https://anniechris.github.io/budget-planner/",
    },
    {
      title: "Age Calculator App",
      description: "Interactive app to calculate your age instantly from date of birth.",
      github: "https://github.com/AnnieChris/age-calculator",
      demo: "https://anniechris.github.io/age-calculator/",
    },
  ],
  other: [
    {
      title: "Church Website",
      description: "Responsive website for a local church to share events and sermons.",
      github: "",
      demo: "https://www.clg.church/",
    },
    {
      title: "Taango Movement",
      description: "Website for Taango Movement, showcasing their mission and activities.",
      github: "",
      demo: "https://tangomovement.com/",
    },
  ],
};

const Projects = ({ id }) => {
  const [activeTab, setActiveTab] = useState("react");

  return (
    <section id={id} className="projects_section py-5" data-aos="fade-up">
      <Container>
        <h2 className="text-center mb-4 fw-bold text-gradient">My Projects</h2>
        <h5 className="text-center mb-5 ">A showcase of my work across various technologies</h5>
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="justify-content-center mb-4 project-tabs"
        >
          <Tab eventKey="hubspot" title="HubSpot Projects" className="fw-semibold ">
            <Row className="g-4">
              <AnimatePresence mode="wait">
                {projects.hubspot.map((project, index) => (
                  <Col key={project.title} md={4} sm={6} xs={12}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="h-100 p-3 d-flex flex-column rounded-4 project-card shadow-sm">
                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="fw-semibold mb-3">{project.title}</Card.Title>
                          <Card.Text className=" flex-grow-1">
                            {project.description}
                          </Card.Text>
                          <div className="mt-auto d-flex gap-2">
                            {project.github && (
                              <Button
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline-danger"
                                size="sm"
                              >
                                <FaGithub /> Code
                              </Button>
                            )}
                            {project.demo && (
                              <Button
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline-success"
                                size="sm"
                              >
                                <FaExternalLinkAlt /> Demo
                              </Button>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </AnimatePresence>
            </Row>
          </Tab>
          <Tab eventKey="react" title="React Projects">
            <Row className="g-4">
              <AnimatePresence mode="wait">
                {projects.react.map((project, index) => (
                  <Col key={project.title} md={4} sm={6} xs={12}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="h-100 p-3 d-flex flex-column rounded-4 project-card shadow-sm">
                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="fw-semibold mb-3">{project.title}</Card.Title>
                          <Card.Text className="flex-grow-1">
                            {project.description}
                          </Card.Text>
                          <div className="mt-auto d-flex gap-2">
                            {project.github && (
                              <Button
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline-danger"
                                size="sm"
                              >
                                <FaGithub /> Code
                              </Button>
                            )}
                            {project.demo && (
                              <Button
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline-success"
                                size="sm"
                              >
                                <FaExternalLinkAlt /> Demo
                              </Button>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </AnimatePresence>
            </Row>
          </Tab>
          
          <Tab eventKey="other" title="Other Projects">
              <Row className="g-4">
              <AnimatePresence mode="wait">
                {projects.other.map((project, index) => (
                  <Col key={project.title} md={4} sm={6} xs={12}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="h-100 p-3 d-flex flex-column rounded-4 project-card shadow-sm">
                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="fw-semibold mb-3">{project.title}</Card.Title>
                          <Card.Text className=" flex-grow-1">
                            {project.description}
                          </Card.Text>
                          <div className="mt-auto d-flex gap-2">
                            {project.github && (
                              <Button
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline-danger"
                                size="sm"
                              >
                                <FaGithub /> Code
                              </Button>
                            )}
                            {project.demo && (
                              <Button
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline-success"
                                size="sm"
                              >
                                <FaExternalLinkAlt /> Demo
                              </Button>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </AnimatePresence>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default Projects;
