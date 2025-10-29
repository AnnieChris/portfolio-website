import { Container, Row, Col, Button } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section id="hero" className='hero-section'>
      <Container className="text-white">
        {/* Animated Particle Background */}
        <div className="animated-bg">
          <span className="circle c1"></span>
          <span className="circle c2"></span>
          <span className="circle c3"></span>
          <span className="circle c4"></span>
          <span className="circle c5"></span>
          <span className="circle c6"></span>
          <span className="circle c7"></span>
        </div>

        {/* Hero Content */}
        <Row className="text-center align-items-center vh-100">
          <Col>
            <h1 className="fw-bold fs-1 mb-4" data-aos="fade-down" data-aos-delay="300">Hello, I'm Annie Esther Wilson</h1>
            <p className="fw-light fs-4 mb-4" data-aos="fade-up" data-aos-delay="500">
              <Typewriter
                words={['Front-End Developer', 'React & HubSpot Expert', 'Interactive Web Designer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </p>
            <Button variant='outline-light' className="fw-semibold py-2 px-4 border-3 rounded-pill" href="#projects" data-aos="zoom-in" data-aos-delay="800">
              View My Work
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
