import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import OVRMenu from "./OVRMenu.js";
import CurrentPreview from "./CurrentPreview.js";
import UpcomingPreview from "./UpcomingPreview.js";

const Content = () => {
  const [vr, setVr] = useState("current");
  return (
    <Container className="p-0">
      <Row>
        <Col
          className="px-0 d-flex justify-content-center"
          style={{ backgroundColor: "#eceef0" }}
        >
          <OVRMenu setVr={setVr} />
        </Col>
        <Col className="col-8 px-0">
          {vr === "current" && <CurrentPreview />}
          {vr === "upcoming" && <UpcomingPreview />}
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
