import { Navbar, Nav } from "react-bootstrap";

const Top = () => {
  return (
    <Navbar
      className="justify-content-around"
      style={{ background: "white" }}
      fixed="top"
    >
      <Navbar.Brand href="/">GALLERY NAME</Navbar.Brand>
      <Nav>
        <Nav.Link href="#artists">Artists</Nav.Link>
        <Nav.Link href="#exhibitions">Exhibitions</Nav.Link>
        <Nav.Link href="#fairs">Fairs</Nav.Link>
        <Nav.Link href="/">Viewing Rooms</Nav.Link>
        <Nav.Link href="#news">News</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Top;
