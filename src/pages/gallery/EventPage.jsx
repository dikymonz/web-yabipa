import { Container, Row, Col } from "react-bootstrap";

const EventPage = () => {
  return (
    <div className="gallery">
      <div className="event">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>
                Gallery <br /> Kegiatan Event
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default EventPage;
