import { Modal, Button, Form, Row, Col } from "react-bootstrap";
function Inquiry(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ letterSpacing: "2px" }}
        >
          Inquire
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Control
                placeholder="First name"
                style={{ letterSpacing: "2px" }}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Last name"
                style={{ letterSpacing: "2px" }}
              />
            </Col>
          </Row>
          <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email Address"
              style={{ letterSpacing: "2px" }}
            />
          </Form.Group>
          <Form.Group className="mt-3" controlId="comment">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Comments"
              style={{ letterSpacing: "2px" }}
            />
          </Form.Group>
          <small style={{ letterSpacing: "2px", color: "gray" }}>
            By sharing your details you agree to our Privacy Policy and Terms
            and Conditions.
          </small>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button
          variant="outline-secondary"
          onClick={props.onHide}
          style={{ letterSpacing: "2px", width: "200px" }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Inquiry;
