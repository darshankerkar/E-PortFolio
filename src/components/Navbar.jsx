import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';

function Navbars() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      className="navbar sticky-top"
      expand="md"
      expanded={expanded}
      style={{ padding: 0 }}
    >
      <Container fluid>
        {/* Hamburger only visible on mobile */}
        <Navbar.Toggle
          
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="d-block d-md-none"
        />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav variant="tabs" defaultActiveKey="/home" className="w-100">
            <Nav.Item>
              <Nav.Link href="#home" style={{ color: "red" }}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about" eventKey="link-1" style={{ color: "red" }}>
                About Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#skills" eventKey="link-2" style={{ color: "red" }}>
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#certifications" eventKey="link-3" style={{ color: "red" }}>
                Certifications
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#academics" eventKey="link-4" style={{ color: "red" }}>
                Academics
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#projects" eventKey="link-5" style={{ color: "red" }}>
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="disabled"
                disabled
                style={{ color: "#ccc", paddingLeft:"880px"}}
                className="contact-link"
              >
                Contact Me
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;