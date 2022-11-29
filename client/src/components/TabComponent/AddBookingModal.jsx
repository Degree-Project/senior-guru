import { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddBookingModal(props) {
  const [newService, setNewService] = useState({
    reservationItem: {
      name: "",
      service: "",
      guru: "",
    },
    contact: "",
    totalCost: "",
  });

  const handleServiceName = (e) => {
    setNewService({ ...newService, reservationItem: { name: e.target.value } });
  };
  const handleServiceDesc = (e) => {
    setNewService({
      ...newService,
      reservationItem: { service: props.service },
    });
  };
  const handleServicePrice = (e) => {
    setNewService({ ...newService, totalCost: e.target.value });
  };
  const handleServiceLocation = (e) => {
    setNewService({ ...newService, contact: e.target.value });
  };

  const onSubmitServices = () => {
    const formData = new FormData();

    try {
      axios.post("/api/admin/service/new", formData).then((res) => {
        toast.success("Services Added Successfully");
      });
    } catch (err) {
      toast.warning(err.response.data.errorMessage);
      console.log(err.response.data.errorMessage);
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Booking
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
              onChange={handleServiceName}
            />
          </Col>
          <Col>
            <Form.Label>Contact</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Enter Location"
              onChange={handleServiceLocation}
            />
          </Col>
        </Row>
        <Form.Label>Description</Form.Label>
        <Form.Control
          className="mb-3"
          as="textarea"
          placeholder="Service Description"
          onChange={handleServiceDesc}
        />
        <Row>
          <Col>
            <Form.Label>Service Type</Form.Label>
            <Form.Select
              className="w-100 mb-3 p-2"
              aria-label="Default select example"
              onChange={handleServiceCategory}
            >
              <option disabled selected>
                Select Mode
              </option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Service Cost</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Enter Service Cost"
              disabled
              value={props.cost}
              onChange={handleServicePrice}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            onSubmitReservation();
          }}
        >
          Add
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
