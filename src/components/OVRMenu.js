import { ListGroup, Button } from "react-bootstrap";

const OVRMenu = ({ setVr }) => {
  return (
    <div
      className="position-fixed"
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
        <ListGroup.Item
          onClick={() => setVr("current")}
          style={{ backgroundColor: "#eceef0", cursor: "pointer" }}
        >
          Current Viewing Rooms
        </ListGroup.Item>
        <ListGroup.Item
          onClick={() => setVr("upcoming")}
          style={{ backgroundColor: "#eceef0", cursor: "pointer" }}
        >
          Upcoming Viewing Rooms
        </ListGroup.Item>
        <ListGroup.Item
          style={{ backgroundColor: "#eceef0", cursor: "pointer" }}
          disabled
        >
          Past Viewing Rooms
        </ListGroup.Item>
      </ListGroup>
      <small style={{ margin: "20px 0" }}>
        Sign up to be notified of new OVRs.
      </small>
      <Button variant="outline-info">Subscribe</Button>
    </div>
  );
};

export default OVRMenu;
