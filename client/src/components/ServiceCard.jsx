import { Card, Image, Row, Col } from "react-bootstrap";
import "../css/ServiceCard.css";

function ServiceCard({
  img,
  serviceName,
  serviceDescription,
  profile,
  name,
  location,
  rating,
  setAddServicesModalShow,
  setValue,
  service,
}) {
  return (
    <Card className="m-1 service-card">
      <a href="#">
        <Card.Img variant="top" className="card-img" src={img} />
      </a>
      <Card.Body className="card-body">
        <a href="#">
          <Card.Title className="card-title">{serviceName}</Card.Title>
          <Card.Text
            style={{
              height: "40px",
              overflow: "hidden",
            }}
          >
            {serviceDescription}
          </Card.Text>
        </a>
        <a href="#">
          <Row className="mt-3">
            <Image className="card-profile-img ml-3" src={profile}></Image>
            <Col className="p-2">
              <Row className="card-profile-info">
                <Col className="pr-2">
                  <Card.Text className="card-profile-info-name">
                    {name}
                  </Card.Text>
                </Col>
                <Col className="pl-0">
                  <Card.Text className="m-0 rating-col">
                    {rating}
                    <i class="fa-solid fa-star px-1" />
                  </Card.Text>
                </Col>
              </Row>
              <Card.Text>
                <i class="fa-solid fa-location-dot pr-1"></i>
                {location}
              </Card.Text>
            </Col>
          </Row>
        </a>
        <Row>
          <input
            type="button"
            className="form-control col-md-8 mt-3 ml-3 login-btn add-btn"
            value="Book Session"
            onClick={() => {
              setAddServicesModalShow(true);
              setValue(service.indexOf(name));
            }}
          />
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
