import { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddServiceModal(props) {
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    location: {
      coordinates: {
        latitude: "",
        longitude: "",
      },
    },
    price: "",
    category: {},
  });

  const handleServiceName = (e) => {
    setNewService({ ...newService, name: e.target.value });
  };
  const handleServiceDesc = (e) => {
    setNewService({ ...newService, description: e.target.value });
  };
  const handleServicePrice = (e) => {
    setNewService({ ...newService, price: e.target.value });
  };
  const handleServiceLocation = (e) => {
    setNewService({
      ...newService,
      location: { coordinates: { latitude: 18, longitude: 73 } },
    });
  };
  const handleServiceCategory = (e) => {
    setNewService({ ...newService, category: e.target.value });
  };

  const onSubmitServices = () => {
    const formData = new FormData();
    formData.append("name", newService.name);
    formData.append("description", newService.name);
    formData.append("location", newService.location);
    formData.append("serviceType", newService.cateogory);
    formData.append("price", newService.price);

    try {
      axios.post("/api/admin/service/new", formData).then((res) => {
        toast.success("Services Added Successfully");
        props.getServices();
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
              onChange={handleServiceName}
            />
          </Col>
          <Col>
            <Form.Label>Location</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Enter Location"
              onChange={handleServiceLocation}
            />
          </Col>
        </Row>
        <Form.Label>Service Description</Form.Label>
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
              value=""
              onChange={handleServiceCategory}
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
              onChange={handleServicePrice}
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
        <Button
          onClick={() => {
            props.onHide();
            onSubmitServices();
          }}
        >
          Add
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
