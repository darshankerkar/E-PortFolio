import { Navbar, Nav } from 'react-bootstrap';

function Navbars(){
    return(
        <div>
        <Navbar className="navbar sticky-top">
        <Nav variant="tabs" defaultActiveKey="/home" >
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
            style={{ color: "#ccc", paddingLeft: "911px" }}
          >
            Contact Me
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar>
        </div>
    )
}

export default Navbars