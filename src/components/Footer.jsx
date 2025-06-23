// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-4 py-1" id='footer' style={{backgroundColor:"black"}}>
      <Container >
        <Row >
          <Col md={6}>
            <h5>For queries</h5>
            <p>darshankerkar9@gmail.com</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>&copy; {new Date().getFullYear()} Darshan Kerkar. All rights reserved.</p>
            <p>
              Let's Connect :{" "}
              <a
                href="https://www.linkedin.com/in/darshan-kerkar-4a237a325"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                style={{ textDecoration: "underline" }}
              >
                www.linkedin.com/in/darshan-kerkar-4a237a325
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
