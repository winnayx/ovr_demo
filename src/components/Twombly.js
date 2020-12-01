import {
  Container,
  Row,
  ResponsiveEmbed,
  Col,
  Carousel,
  Button,
} from "react-bootstrap";
import twombly1 from "../assets/twombly-1.jpg";
import twombly2 from "../assets/twombly-2.jpg";
import twomblyc1 from "../assets/twombly-c1.jpg";
import twomblyc2 from "../assets/twombly-c2.jpg";
import twomblyc3 from "../assets/twombly-c3.jpg";

import Zoom from "react-reveal/Zoom";

const Twombly = () => {
  return (
    <Zoom>
      <Container width="100%">
        <Row>
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "900",
              letterSpacing: "3px",
            }}
          >
            Cy Twombly:
          </h1>
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "900",
              letterSpacing: "3px",
              marginBottom: "40px",
            }}
          >
            Cycles and Seasons
          </h1>
          <img src={twombly1} width="100%" alt="Twombly 1" />
        </Row>
        <Row className="p-5 m-5">
          <p style={{ letterSpacing: "2px" }}>
            Cy Twombly: Cycles and Seasons is an online exhibition that reveals
            the panoramic range of subjects and emotions addressed in Twombly's
            art.
          </p>
        </Row>
        <Row className="px-5">
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Z5_1m7MMXyE?start=11"
              frameborder="0"
              title="Cy Twombly at Tate Modern | TateShots"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </ResponsiveEmbed>
        </Row>
        <Row className="my-5 py-5">
          <Col className="col-8">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={twomblyc1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={twomblyc2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={twomblyc3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="d-flex align-items-end">
            <h6>
              Following Twombly’s move to Rome in 1957, his work becomes less
              encrusted and less harshly striated. Examples like Olympia (1957)
              are characterized by a new space, light, and color that yield a
              canvas that is at once reticent and expressive. The letters and
              words that Twombly inscribed on the pale ground of Olympia place
              his work at the nexus of art, language, and writing.
            </h6>
          </Col>
        </Row>
        <Row className="p-5 m-5 d-flex justify-content-center text-center flex-column">
          <h4>
            See the presentation in person at Gallery Name on Via Ricasoli, 49
          </h4>
          <Button>Schedule a Visit</Button>
        </Row>
      </Container>
    </Zoom>
  );
};

export default Twombly;
