import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/NavBar.css";

function NavBar() {
  return (
    <Navbar
      style={{ zIndex: "6" }}
      className=" justify-content-center d-flex w-100 position-fixed "
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          className="justify-content-center d-flex w-50"
          href="#home"
        >
          Senior Guru
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center d-flex w-50">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Get Stated" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign-In</NavDropdown.Item>
              <NavDropdown.Item href="/signup">Sign-Up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
