import { Container, Row, Col } from "react-bootstrap";

const KBMPage = () => {
  return (
    <div className="gallery">
      <div className="kbm">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>
                Gallery <br /> Kegiatan KBM
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default KBMPage;
