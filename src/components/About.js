import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {FaReact, FaNodeJs, FaJava, FaGitAlt, FaAws, FaChevronRight, FaAngleDoubleRight } from "react-icons/fa";
import { SiHubspot } from "react-icons/si";
import { AiOutlineDatabase } from "react-icons/ai";
import profilePic from "../images/AnnieW.jpg";

const skills = [
  { name: "React.js", icon: <FaReact style={{ color: "#61DBFB" }} /> },
  { name: "Node.js", icon: <FaNodeJs style={{ color: "#8CC84B" }} /> },
  { name: "HubSpot CMS", icon: <SiHubspot style={{ color: "#FF7A59" }} /> },
  { name: "Java", icon: <FaJava style={{ color: "#007396" }} /> },
  { name: "Microsoft SQL Server", icon: <AiOutlineDatabase   style={{ color: "#CC2927" }} /> },
  { name: "Amazon Web Service", icon: <FaAws style={{ color: "#FF9900" }} /> },
  { name: "Git / Github / Gitlab", icon: <FaGitAlt style={{ color: "#F05032" }} /> },
];

export default function About() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="about" className="about-section py-5" data-aos="fade-up" data-aos-delay="200">
      <Container>
        <Row className="justify-content-center g-5">
          {/* Profile Card */}
          <Col lg={4} md={5} className="p-3">
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
                    href="https://drive.google.com/file/d/1zfd8Q9xZIQOnmoNfaLYqw051KHJSTDIU/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-pill border-2 fw-semibold btn-resume"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    aria-label="View Annie Wilson's Resume"
                    variant="outline-danger"
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
          <Col lg={7} md={6} className="p-3">
            <div className="p-3 about-content">
              <h2 className="mb-3 fw-bold text-gradient">About Me</h2>
              <p className="mb-3 fs-6">
                I’m a Front-End Developer passionate about building responsive, accessible, and performant web applications.
                My expertise spans React, HubSpot CMS, and modern JavaScript workflows. I enjoy collaborating with teams
                to deliver polished and efficient solutions.
              </p>
              <h5 className="mt-5 mb-3">Skills & Technologies</h5>
              <Row className="g-4">
                {skills.map((skill, idx) => (
                  <Col xs={6} sm={6} md={6} lg={6} xl={3} key={idx} className="">
                    <div
                      className="rounded-pill fw-semibold p-2 d-flex align-items-center justify-content-center skill-item"
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <span className="fs-4 mx-2 skill-icon">{skill.icon}</span>
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
