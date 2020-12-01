import { CardColumns, Card } from "react-bootstrap";
import basquiatEx from "../assets/basquiat-ex1.jpg";

const UpcomingPreview = () => {
  return (
    <div>
      <Card style={{ border: "none", marginBottom: "40px" }}>
        <Card.Img src={basquiatEx} alt="Basquiat" style={{ borderRadius: 0 }} />
        <Card.Body>
          <h3>Jean-Michel Basquiat: Now's the Time</h3>
          <Card.Text>February 2 - May 10, 2021</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UpcomingPreview;
