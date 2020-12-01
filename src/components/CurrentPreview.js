import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import turnerEx from "../assets/turner-ex1.jpg";
import twomblyEx from "../assets/twombly-ex1.jpg";
const CurrentPreview = () => {
  return (
    <div>
      <Card style={{ border: "none", marginBottom: "40px", cursor: "pointer" }}>
        <LinkContainer to="/twombly">
          <Card.Img
            src={twomblyEx}
            alt="Twombly"
            style={{ borderRadius: 0, cursor: "pointer" }}
          />
        </LinkContainer>
        <Card.Body>
          <LinkContainer to="/twombly">
            <h3 style={{ cursor: "pointer" }}>
              Cy Twombly: Cycles and Seasons
            </h3>
          </LinkContainer>

          <Card.Text>Now Live</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ border: "none", marginBottom: "40px" }}>
        <Card.Img
          src={turnerEx}
          alt="Turner Venice"
          style={{ borderRadius: 0 }}
        />
        <Card.Body>
          <h3>J.M.W. Turner: Painting Set Free</h3>
          <Card.Text>Now Live</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CurrentPreview;
