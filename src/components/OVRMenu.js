import { ListGroup, Button } from "react-bootstrap";

const OVRMenu = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        paddingTop: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3 style={{ letterSpacing: "2px", marginBottom: "30px" }}>
        Viewing Room
      </h3>
      <ListGroup variant="flush">
        <ListGroup.Item>Current Viewing Rooms</ListGroup.Item>
        <ListGroup.Item>Upcoming Viewing Rooms</ListGroup.Item>
        <ListGroup.Item>Past Viewing Rooms</ListGroup.Item>
      </ListGroup>
      <small style={{ margin: "20px 0" }}>
        Sign up to be notified of new OVRs.
      </small>
      <Button>Subscribe</Button>
    </div>
  );
};

export default OVRMenu;
