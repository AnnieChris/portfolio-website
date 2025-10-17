import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  { 
    icon: <FaEnvelope />, 
    label: "Email", 
    href: "mailto:annieesther3@gmail.com" 
  },
  { 
    icon: <FaLinkedin />, 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/annie-esther-wilson-063249100/" 
  },
  { 
    icon: <FaGithub />, 
    label: "GitHub", 
    href: "https://github.com/AnnieChris" 
  },
  { 
    icon: <FaMapMarkerAlt />, 
    label: "Location", 
    href: "https://www.google.com/maps/place/Waukesha,+WI,+USA" 
  },
];

const containerVariants = {
  animate: { transition: { staggerChildren: 0.2 } },
};

const iconVariants = {
  animate: {
    y: [0, -10, 0],
    textShadow: [
      "0 0 0px rgba(13,110,253,0)",
      "0 0 15px rgba(13,110,253,0.4)",
      "0 0 0px rgba(13,110,253,0)",
    ],
    filter: [
      "drop-shadow(0 0 0px rgba(13,110,253,0))",
      "drop-shadow(0 0 8px rgba(13,110,253,0.4))",
      "drop-shadow(0 0 0px rgba(13,110,253,0))",
    ],
    transition: { duration: 2, repeat: Infinity, repeatType: "loop" },
  },
};

const Contact = ({ id }) => {
  return (
    <section id={id} className="contact-section py-5 d-flex align-items-center" data-aos="fade-up">
      <Container>
        <Row className="align-items-center justify-content-center g-4">
          {/* Left Section */}
          <Col xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-4 fw-bold text-gradient">Get in Touch</h2>
              <p>
                I’m always open to new opportunities, creative collaborations, or just a friendly chat.
                Feel free to reach out through any of the platforms below — I’d love to connect!
              </p>
            </motion.div>
          </Col>

          {/* Right Section */}
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="d-flex justify-content-center justify-content-md-around flex-wrap"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  variants={iconVariants}
                  className="m-3 fs-2 contact-icon"
                  whileHover={{
                    scale: 1.4,
                    rotate: 10,
                    color: "#0d6efd",
                    textShadow: "0 0 25px rgba(13,110,253,0.7)",
                    filter: "drop-shadow(0 0 12px rgba(13,110,253,0.7))",
                  }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
