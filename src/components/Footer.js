import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="text-light bg-dark py-4">
      <Container className="text-center">
        <motion.h6
          className="fw-bold mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ letterSpacing: "0.5px" }}
        >
          Annie Esther Wilson
        </motion.h6>

        <motion.p
          className="small mb-0 text-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          © {new Date().getFullYear()} Crafted with ❤️ & dedication.
        </motion.p>
      </Container>
    </footer>
  );
}
