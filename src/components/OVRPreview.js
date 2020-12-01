import { CardColumns, Card } from "react-bootstrap";
import turnerVenice from "../assets/turner-ex1.jpg";
const OVRPreview = () => {
  return (
    <div>
      <Card style={{ border: "none", marginBottom: "40px" }}>
        <Card.Img
          src={turnerVenice}
          alt="Turner Venice"
          style={{ borderRadius: 0 }}
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-end">
          <div>
            <div
              style={{ borderTop: "2px solid white", marginBottom: "5px" }}
            />
            <h2 style={{ color: "white" }}>J.M.W. Turner: Painting Set Free</h2>
            <h4 style={{ color: "white" }}>Now Live</h4>
          </div>
          {/* <Card.Text>
            One of the most radical and influential artists of the 19th century,
            Joseph Mallord William Turner (1775–1851), was a giant of British
            art who produced many of his most important and famous pictures
            after the age of sixty, in the last fifteen years of his life.
          </Card.Text> */}
        </Card.ImgOverlay>
      </Card>
      <Card style={{ border: "none", marginBottom: "40px" }}>
        <Card.Img
          src={turnerVenice}
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

export default OVRPreview;
