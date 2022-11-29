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
    totalCost: "",
  });

  const handleServiceContact = (e) => {
    setNewService({
      ...newService,
      reservationItem: {
        name: props.serviceDetails.name,
        service: props.serviceDetails.id,
        guru: props.serviceDetails.user,
      },
      totalCost: props.serviceDetails.price,
    });
  };

  const onSubmitReservation = () => {
    try {
      axios.post("/api/reservation/new", { ...newService }).then((res) => {
        toast.success("Booked Successfully");
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
              disabled
              value={props.serviceDetails.name}
            />
          </Col>
          <Col>
            <Form.Label>Contact</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Enter Location"
              onChange={handleServiceContact}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Service Type</Form.Label>
            <Form.Select
              className="w-100 mb-3 p-2"
              aria-label="Default select example"
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
              value={props.serviceDetails.price}
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
