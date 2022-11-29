import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Modal, Form } from "react-bootstrap";

export default function AddCertificateModal(props) {
  const [getCertificate, setGetCertificate] = useState({
    title: "",
    files: "",
    cretedAt: new Date(),
  });

  const handleCertificate = (e) => {
    setGetCertificate({ ...getCertificate, files: e.target.files[0] });
  };
  const handleCertificateName = (e) => {
    setGetCertificate({ ...getCertificate, title: e.target.value });
  };

  const onSubmitCertificate = () => {
    const formData = new FormData();
    formData.append("title", getCertificate.title);
    formData.append("certificate", getCertificate.files);
    formData.append("createdAt", getCertificate.cretedAt);
    try {
      axios.post("/api/guru/certificate/new", formData).then((res) => {
        toast.success("Certificate Added Successfully");
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
          Add Certificate
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Service Name</Form.Label>
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Enter title"
          onChange={handleCertificateName}
        />
        <Form.Label>Upload Certificate Image</Form.Label>
        <Form.Control
          style={{ padding: "0.2rem" }}
          className="mb-3"
          type="file"
          onChange={handleCertificate}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            onSubmitCertificate();
          }}
        >
          Add
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
