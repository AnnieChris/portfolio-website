import React from 'react';
import { useState } from 'react';
import { Carousel, Card, Button, Row, Col, Modal } from 'react-bootstrap';
import ReactCardSlider from 'react-card-slider-component';
import { Link } from 'react-router-dom';

import zippy from '../images/MARS.png'
import church from '../images/church.png'
import gsr from '../images/GSR_Logo.png'
import calculator from '../images/calculator.jpg'
import camera from '../images/camera.jpg'
import elearning from '../images/e-learning.jpg'

const Projects = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Carousel >
        <Carousel.Item>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Card>
                <Card.Img variant="top" src={zippy} />
                <Card.Body>
                  <Card.Title>Zippy</Card.Title>
                  {/* <Card.Text>
                Some text for Card 1.
              </Card.Text> */}
                  <Button variant="primary" onClick={() => window.open("http://zippy-react-app.s3-website-us-east-1.amazonaws.com/", "_blank")}>View Project</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md="auto">
              <Card>
                <Card.Img variant="top" src={church} />
                <Card.Body>
                  <Card.Title>Church in London</Card.Title>
                  {/* <Card.Text>
                Some text for Card 2.
              </Card.Text> */}
                  <Button variant="primary" onClick={() => window.open("https://www.clg.church/", "_blank")}>View Project</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md="auto">
              <Card>
                <Card.Img variant="top" src={gsr} />
                <Card.Body>
                  <Card.Title>Great Scenic Railways</Card.Title>
                  {/* <Card.Text>
                Some text for Card 3.
              </Card.Text> */}
                  <Button variant="primary" onClick={() => window.open("https://greatscenicrailways.co.uk/", "_blank")}>View Project</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* <Col md="auto">
              <Card>
                <Card.Img variant="top" src={camera} className='obj_fit' />
                <Card.Body>
                  <Card.Title>Photography</Card.Title>
                  <Card.Text>
                    Some text for Card 3.
                  </Card.Text>
                  <Button variant="primary" onClick={() => window.open("https://google.com", "_blank")}>View Project</Button>
                </Card.Body>
              </Card>
            </Col> */}

          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="justify-content-md-center">
            {/* <Col md="auto">
              <Card>
                <Card.Img variant="top" src={elearning} className='obj_fit' />
                <Card.Body>
                  <Card.Title>E-learning</Card.Title>
                  <Card.Text>
                    Some text for Card 4.
                  </Card.Text>
                  <Button variant="primary" onClick={() => window.open("https://google.com", "_blank")}>View Project</Button>
                </Card.Body>
              </Card>
            </Col> */}
            {/* 
            <Col md="auto">
              <Card>
                <Card.Img variant="top" src={calculator} className='obj_fit' />
                <Card.Body>
                  <Card.Title>Calculator App</Card.Title>
                  <Card.Text>
                    Some text for Card 5.
                  </Card.Text>

                  <Button variant="primary" onClick={() => window.open("https://google.com", "_blank")}>View Project</Button>
                </Card.Body>
              </Card>
            </Col> */}

            <Col md="auto">
              <Card>
                {/* <Card.Img variant="top" src="https://picsum.photos/700/600" /> */}
                <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {/* <Card.Title>Great Scenic Railways</Card.Title> */}
                  {/* <Card.Text>
                Some text for Card 3.
              </Card.Text> */}
                  <Button variant="primary" onClick={handleShow}>View More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>View More Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Under Construction</h3>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

    </div>


  );
}


export default Projects;