import { Container, Row, Col } from "react-bootstrap";
import OVRMenu from "./OVRMenu.js";
import OVRPreview from "./OVRPreview.js";

const Content = () => {
  return (
    <Container>
      <Row>
        <Col className="px-0" style={{ backgroundColor: "#eceef0" }}>
          <OVRMenu />
        </Col>
        <Col className="col-8 px-0">
          <OVRPreview />
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
