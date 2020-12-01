import { Navbar, Nav } from "react-bootstrap";

const Top = () => {
  return (
    <Navbar
      className="justify-content-around"
      style={{ background: "white" }}
      fixed="top"
    >
      <Navbar.Brand href="#home">GALLERY NAME</Navbar.Brand>
      <Nav>
        <Nav.Link href="#home">Artists</Nav.Link>
        <Nav.Link href="#home">Exhibitions</Nav.Link>
        <Nav.Link href="#home">Fairs</Nav.Link>
        <Nav.Link href="#home">Viewing Rooms</Nav.Link>
        <Nav.Link href="#home">News</Nav.Link>
        <Nav.Link href="#home">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Top;
