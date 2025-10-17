import { Container, Row, Col, Button } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero({ id }) {
  return (
    <section id={id} className='hero-section text-white mx-auto'>
      <Container fluid className="hero d-flex align-items-center vh-100 ">
        {/* Animated Particle Background */}
        <div className="animated-bg">
          <span className="circle c1"></span>
          <span className="circle c2"></span>
          <span className="circle c3"></span>
          <span className="circle c4"></span>
          <span className="circle c5"></span>
        </div>

        {/* Hero Content */}
        <Row className="w-100 text-center" style={{ zIndex: 1 }}>
          <Col>
            <h1 data-aos="fade-down">Hello, I'm Annie Esther Wilson</h1>
            <p className="lead" data-aos="fade-up" data-aos-delay="200">
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
            <Button variant="light" className="mt-3" href="#projects" data-aos="zoom-in" data-aos-delay="400">
              View My Work
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
