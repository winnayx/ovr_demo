import {
  Container,
  Row,
  ResponsiveEmbed,
  Col,
  Carousel,
  Button,
  Image,
  Figure,
} from "react-bootstrap";
import twombly1 from "../assets/twombly/1.jpg";
import c1 from "../assets/twombly/c1.jpg";
import c2 from "../assets/twombly/c2.jpg";
import c3 from "../assets/twombly/c3.jpg";
import c4 from "../assets/twombly/c4.jpg";
import c5 from "../assets/twombly/c5.jpg";
import c6 from "../assets/twombly/c6.jpg";
import blooming from "../assets/twombly/blooming.jpg";
import bacchus from "../assets/twombly/bacchus.jpg";
import untitled from "../assets/twombly/untitled.jpg";
import installation from "../assets/twombly/installation.jpg";
import working1 from "../assets/twombly/working-1.jpg";
import working2 from "../assets/twombly/working-2.jpg";
import studio1 from "../assets/twombly/studio-1.jpg";
import apollo from "../assets/twombly/apollo.jpeg";
import venus from "../assets/twombly/venus.jpeg";

import Zoom from "react-reveal/Zoom";

const Twombly = () => {
  return (
    <Container width="100%">
      <Row>
        <Image src={twombly1} width="100%" alt="Twombly 1" fluid />
      </Row>
      <Row className="intro p-5 m-5">
        <p style={{ letterSpacing: "2px" }}>
          Cy Twombly: Cycles and Seasons is an online exhibition that reveals
          the panoramic range of subjects and emotions addressed in Twombly's
          art. Twombly rose to prominence through a distinctive style
          characterised by scribbles and vibrantly daubed paint.
        </p>
      </Row>
      <Row className="artwork mb-5">
        <Image src={blooming} width="100%" alt="Blooming" fluid />
        <div
          className="d-flex justify-content-between align-items-center px-2 mt-3"
          style={{ width: "100%" }}
        >
          <div className="d-flex flex-column">
            <p className="m-0" style={{ letterSpacing: "2px" }}>
              Blooming
              <br /> Acrylic, wax crayon on 10 wooden panels, 250 x 500 cm
              <br />
              2001-2008
            </p>
          </div>
          <Button
            variant="outline-secondary"
            style={{ height: "50px", width: "200px", letterSpacing: "2px" }}
          >
            Inquire
          </Button>
        </div>
      </Row>
      <Row className="carousel-sketches my-5 py-5">
        <Col className="col-8">
          <Carousel>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={c1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={c2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={c3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={c4} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={c5} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={c6} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="d-flex flex-column">
              <p className="m-0" style={{ letterSpacing: "2px" }}>
                Untitled (7 drawings)
                <br />
                Wax crayon and lead pencil on squared paper, 21.6 x 29.9 cm
                <br />
                2005
              </p>
            </div>
            <Button
              variant="outline-secondary"
              style={{ height: "50px", width: "150px", letterSpacing: "2px" }}
            >
              Inquire
            </Button>
          </div>
        </Col>
        <Col className="d-flex align-items-end">
          <p style={{ letterSpacing: "2px" }}>
            Unlike his contemporaries and friends Robert Rauschenberg and Jasper
            Johns, Twombly chose to cultivate the legacy of the Abstract
            Expressionists. He has pursued a form of painting that combines
            elements of gestural abstraction, drawing, and writing in a personal
            manner that is seemingly remote from the media-saturated world of
            contemporary culture. Suffused with references to poetry and the
            Mediterranean heritage that has surrounded him since his move to
            Italy in 1957, Twombly’s art bridges literary and painterly
            sensibilities, and links contemporary art to a rich cultural past of
            antiquity and Romanticism.
          </p>
        </Col>
      </Row>
      <Row className="mb-5 d-flex justify-content-center">
        <Image className="px-5" src={bacchus} width="90%" alt="Bacchus" />
        <div
          className="d-flex justify-content-between align-items-center px-5 mt-3"
          style={{ width: "90%" }}
        >
          <div className="d-flex flex-column">
            <p className="m-0" style={{ letterSpacing: "2px" }}>
              Untitled (Bacchus)
              <br />
              Acrylic on canvas, 317.5 x 417.8
              <br /> 2005
            </p>
          </div>
          <Button
            variant="outline-secondary"
            style={{ height: "50px", width: "200px", letterSpacing: "2px" }}
          >
            Inquire
          </Button>
        </div>
      </Row>
      <Row className="artwork mb-5 d-flex justify-content-center">
        <Image className="px-5" src={untitled} width="90%" alt="Bacchus" />
        <div
          className="d-flex justify-content-between align-items-center px-5 mt-3"
          style={{ width: "90%" }}
        >
          <div className="d-flex flex-column">
            <p className="m-0" style={{ letterSpacing: "2px" }}>
              Untitled
              <br />
              Acrylic on canvas, 325.1 x 494
              <br />
              2005
            </p>
          </div>
          <Button
            variant="outline-secondary"
            style={{ height: "50px", width: "200px", letterSpacing: "2px" }}
          >
            Inquire
          </Button>
        </div>
      </Row>
      <Row className="installation mb-5 d-flex justify-content-center">
        <Image className="px-5" src={installation} width="100%" alt="Bacchus" />
      </Row>
      <Row className="video px-5 mb-5">
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
      <Row className="schedule my-5 py-5 d-flex align-items-center text-center flex-column">
        <h4 className="mb-3" style={{ letterSpacing: "2px" }}>
          See the presentation in person at GALLERY NAME on Via Ricasoli, 49
        </h4>
        <Button
          variant="outline-secondary"
          style={{ width: "40%", letterSpacing: "2px" }}
        >
          Schedule a Visit
        </Button>
      </Row>
      <Row className="studio mb-5 d-flex justify-content-center">
        <Image className="px-5" src={working1} width="50%" alt="working" />
        <Image className="px-5" src={studio1} width="50%" alt="studio" />
      </Row>
      <Row className="quote p-5 m-5">
        <p style={{ letterSpacing: "2px" }}>
          “For all the complex linguistic structure of [Twombly’s] aesthetic and
          the rich web of his references, what his achievement may ultimately
          depend upon most heavily is the power he has drawn from within himself
          and from so many enabling traditions, to isolate in a particularly raw
          and unsettled fashion that primal electricity of communication in his
          apparently simplest acts of naming, marking, and painting.”
        </p>
        <p style={{ letterSpacing: "2px", width: "100%", textAlign: "right" }}>
          --- Kirk Varnedoe, art curator
        </p>
      </Row>
      <Row className="artwork mb-5">
        <Col>
          <Image src={apollo} width="100%" alt="Apollo" fluid />
          <div
            className="d-flex justify-content-between align-items-center px-2 mt-3"
            style={{ width: "100%" }}
          >
            <div className="d-flex flex-column">
              <p className="m-0" style={{ letterSpacing: "2px" }}>
                Apollo
                <br />
                Oil pastel and lead pencil on paper, 150 x 134 cm
                <br />
                1975
              </p>
            </div>
            <Button
              variant="outline-secondary ml-2"
              style={{ height: "50px", width: "150px", letterSpacing: "2px" }}
            >
              Inquire
            </Button>
          </div>
        </Col>
        <Col>
          <Image src={venus} width="100%" alt="Venus" fluid />
          <div
            className="d-flex justify-content-between align-items-center px-2 mt-3"
            style={{ width: "100%" }}
          >
            <div className="d-flex flex-column">
              <p className="m-0" style={{ letterSpacing: "2px" }}>
                Venus
                <br />
                Oil Pastel, lead pencil and collage on paper, 150 x 137 cm
                <br />
                1975
              </p>
            </div>
            <Button
              variant="outline-secondary ml-2"
              style={{ height: "50px", width: "150px", letterSpacing: "2px" }}
            >
              Inquire
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Twombly;
