import { Container, Row, Col, Image } from "react-bootstrap";
export default function GuruCard() {
  var style = {
    background: "var(--primary-color)",
  };
  return (
    <>
      <Container className="col-3 col-md-6 col-sm-8 p-3 rounded" style={style}>
        <Row className="align-items-center">
          <Col className="col-3">
            <Image
              className="rounded-circle"
              style={{ width: "3rem" }}
              src="/assets/images/profile/guru.png"
            />
          </Col>
          <Col className="col-9">
            <Row className="align-items-center">
              <Col className="col-6">
                <h4 className="m-0">Saiel</h4>
              </Col>
              <Col className="col-5">
                4.5
                <i class="fa-solid fa-star px-1" />
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col className="col-2">
                <h6 className="m-0">Goa</h6>
              </Col>
              <Col>
                <i class="fa-solid fa-location-dot pr-1" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
