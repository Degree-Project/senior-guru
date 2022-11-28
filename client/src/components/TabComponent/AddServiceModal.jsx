import { Button, Modal, Form, Row, Col } from "react-bootstrap";

export default function AddServiceModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Services
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Form.Label>Service Name</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Enter Service Name"
            />
          </Col>
          <Col>
            <Form.Label>Location</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Enter Location"
            />
          </Col>
        </Row>
        <Form.Label>Service Description</Form.Label>
        <Form.Control
          className="mb-3"
          as="textarea"
          placeholder="Service Description"
        />
        <Row>
          <Col>
            <Form.Label>Service Type</Form.Label>
            <Form.Select
              className="w-100 mb-3 p-2"
              aria-label="Default select example"
            >
              <option disabled selected>
                Select service type
              </option>
              <option value="Technical">Technical</option>
              <option value="Non-Technical">Non-Technical</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Service Cost</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Enter Service Cost"
            />
          </Col>
        </Row>
        <Form.Label>Upload Service Image</Form.Label>
        <Form.Control
          style={{ padding: "0.2rem" }}
          className="mb-3"
          type="file"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Add</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
