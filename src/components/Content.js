import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import OVRMenu from "./OVRMenu.js";
import CurrentPreview from "./CurrentPreview.js";
import UpcomingPreview from "./UpcomingPreview.js";
import Twombly from "./Twombly.js";

const Content = () => {
  const [vr, setVr] = useState("current");
  return (
    <Container className="p-0">
      <Switch>
        <Route path="/twombly">
          <Twombly />
        </Route>
        <Route exact path="/">
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
        </Route>
      </Switch>
    </Container>
  );
};

export default Content;
