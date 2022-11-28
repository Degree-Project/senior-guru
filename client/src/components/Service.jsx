import { Container, Row, Col } from "react-bootstrap";
import GuruCard from "./GuruCard";
export default function Service() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Web-Developnemt</h1>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h4>Description</h4>
          </Col>
        </Row>
        <Row className="mt-2 mx-2">
          <Col className="col-9">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
              quibusdam amet! Similique qui odio reprehenderit fuga blanditiis,
              dolore consequatur unde. Nulla, porro beatae! Itaque, a
              blanditiis. Voluptatem, consectetur necessitatibus aliquid saepe
              minima itaque iste repellat. Nemo, perferendis corporis minus
              porro error minima exercitationem reiciendis cum beatae illum eos
              sint, ipsum distinctio quia in. Doloremque esse optio accusamus
              natus neque nemo quis. Quas dolorum temporibus iure excepturi at
              officia hic harum? Atque tempore, voluptate, voluptas, deserunt ab
              suscipit quam deleniti quasi sapiente est rerum nam iste cumque
              nemo. Assumenda consequuntur, nam culpa eligendi ad maxime quos,
              deleniti accusamus voluptatem, totam aliquid.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <GuruCard />
          </Col>
          <Col>
            <input
              style={{
                color: "var(--primary-text-color)",
              }}
              type="button"
              className="form-control col-md-3 login-btn add-btn"
              value="Book Session"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
