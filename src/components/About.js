import React, { useEffect, useState } from "react";
import profilePic from "../images/AnnieW.jpg";
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, 
  FaJava, FaPhp, FaGitAlt, FaGithub, FaDatabase, FaPalette, FaAws, FaGitlab,  FaArrowRight, FaChevronRight, FaAngleDoubleRight, 
} from "react-icons/fa";
import {
  SiRedux, SiHubspot, SiMysql, SiMongodb, SiJest, SiPostman, SiFigma,
  SiWordpress, SiJoomla, SiJira, SiTrello, SiSlack, SiZoom, SiSpringboot,  
} from "react-icons/si";
import { AiOutlineDatabase } from "react-icons/ai";
import Experience from "./Experience";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const skills = [

  { name: "React.js", icon: <FaReact style={{ color: "#61DBFB" }} /> },
  { name: "Node.js", icon: <FaNodeJs style={{ color: "#8CC84B" }} /> },
    { name: "HubSpot CMS", icon: <SiHubspot style={{ color: "#FF7A59" }} /> },
  { name: "Java", icon: <FaJava style={{ color: "#007396" }} /> },
  { name: "Microsoft SQL Server", icon: <AiOutlineDatabase   style={{ color: "#CC2927" }} /> },
  { name: "Amazon Web Service", icon: <FaAws style={{ color: "#FF9900" }} /> },
  { name: "Git / Github / Gitlab", icon: <FaGitAlt style={{ color: "#F05032" }} /> },
];

export default function About({ id }) {
  const [visible, setVisible] = useState(false);
  // Import react-bootstrap components
  const [hovered, setHovered] = useState(false);  

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("about");
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.8) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id={id} className={`about-section ${visible ? "show" : ""} py-5`}>
      <Container fluid="lg">
        <Row className="mb-4 g-4">
          {/* Profile Card */}
          <Col md={4} className="p-3 align-items-center ">
            <Card className="p-3 text-center shadow-lg border-0 rounded-5 profile-card">
              <Card.Img
                variant="top"
                src={profilePic}
                alt="Annie Esther Wilson"
                className="rounded-circle mx-auto profile-photo"
              />
              <Card.Body>
                <Card.Title className="fs-4 fw-semibold py-2">Annie Esther Wilson</Card.Title>
                <Card.Subtitle className="fs-6 mb-3">
                  Master’s in Computer Applications
                </Card.Subtitle>
                <Card.Text className="">
                  Front-End Developer • 5+ Years
                </Card.Text>
                <div className="profile-actions">
                  <Button
                    as="a"
                    href="/Annie_Wilson_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-pill border-2 fw-semibold btn-resume"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    aria-label="View Annie Wilson's Resume"
                    variant="primary"
                  >
                    View Resume{" "}
                    {hovered ? (
                      <FaAngleDoubleRight className="arrow-icon double" />
                    ) : (
                      <FaChevronRight className="arrow-icon" />
                    )}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* About Text & Skills */}
          <Col md={7} className="p-3 m-auto align-items-center">
            <div className="py-5 about-content">
              <h2 className="my-3 mb-4 fw-bold text-gradient">About Me</h2>
              <p className="my-3">
                I’m a Front-End Developer passionate about building responsive, accessible, and performant web applications.
                My expertise spans React, HubSpot CMS, and modern JavaScript workflows. I enjoy collaborating with teams
                to deliver polished and efficient solutions.
              </p>
              <h5 className="my-5 md-fluid">Skills & Technologies</h5>
              <Row className="g-4">
                {skills.map((skill, idx) => (
                  <Col xs={6} sm={4} md={6} lg={4} xl={3} key={idx} className="my-3">
                    <div
                      className="w-100 h-100 rounded-pill fw-semibold p-md-2 d-flex align-items-center justify-content-center skill-item"
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <span className="fs-4 skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>       
      </Container>
    </section>
  );
}
