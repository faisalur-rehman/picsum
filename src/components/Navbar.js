import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = (props) => {
  return (
    <div>
      {!props.footer ? (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Gallery</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More Images</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank Gallery
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <div
              className="text-center"
              style={{ width: "100%", padding: "10px", color: "white" }}
            >
              <h3>Copyright @2021 -React Image Gallery</h3>
            </div>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default NavbarComponent;
