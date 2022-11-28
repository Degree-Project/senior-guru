import { Button, Modal, Form } from "react-bootstrap";

export default function AddCertificateModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Certificate
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Certificate</Form.Label>
          <Form.Control className="pb-1" type="file" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Certificate Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Certificate Name" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
